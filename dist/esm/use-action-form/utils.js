import { $modelRelationships, camelize, isEqual } from "@gadgetinc/api-client-core";
import { useFindBy } from "../useFindBy.js";
import { useFindOne } from "../useFindOne.js";
import { get, set, unset } from "../utils.js";
const noopUseFindExistingRecordResponse = [
    { fetching: false },
    () => undefined, // no-op callback
];
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
export const useFindExistingRecord = (modelManager, findBy, options) => {
    if (!modelManager || !findBy) {
        return noopUseFindExistingRecordResponse;
    }
    // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
    if (typeof findBy === "string") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindOne(modelManager, findBy, options);
    }
    const isValidFindByObject = typeof findBy === "object" && !Array.isArray(findBy) && Object.keys(findBy).length;
    if (isValidFindByObject) {
        const [findByKey, findByValue] = Object.entries(findBy)[0];
        const findByOperationName = `findBy${camelize(findByKey)}`;
        if (!(findByOperationName in modelManager)) {
            if (options.throwOnInvalidFindByObject === undefined || options.throwOnInvalidFindByObject) {
                throw new Error(`Invalid findBy object: ${JSON.stringify(findBy)}. ${findByOperationName} is not a valid findBy operation for this model.`);
            }
            return noopUseFindExistingRecordResponse;
        }
        const finder = modelManager[findByOperationName];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindBy(finder, findByValue, options);
    }
    return noopUseFindExistingRecordResponse;
};
const OmittedKeys = ["id", "createdAt", "updatedAt", "__typename"];
const omitKeys = (data) => {
    const newData = { ...data };
    for (const key of OmittedKeys) {
        delete newData[key];
    }
    return newData;
};
export const processDefaultValues = (opts) => {
    const { modelApiIdentifier, data, defaultValues } = opts;
    convertRoleObjectListIntoStringList(data); // Incoming role objects arrays need to be converted to role key string arrays because the API will only accept role keys
    const modelDefaultValues = toDefaultValues(modelApiIdentifier, data);
    const result = opts.hasAmbiguousDefaultValues
        ? { ...defaultValues, [modelApiIdentifier]: modelDefaultValues }
        : { ...defaultValues, ...modelDefaultValues, [modelApiIdentifier]: modelDefaultValues };
    return result;
};
const convertRoleObjectListIntoStringList = (data) => {
    for (const key of Object.keys(data)) {
        const isArray = Array.isArray(data[key]) && data[key].length;
        if (isArray) {
            data[key] = data[key].map((role) => {
                const hasRoleKey = typeof role === "object" && "__typename" in role && role.__typename === "Role" && "key" in role;
                return hasRoleKey ? role.key : role;
            });
        }
    }
};
export const toDefaultValues = (modelApiIdentifier, data) => {
    data = omitKeys(data);
    if (modelApiIdentifier && data[modelApiIdentifier] && typeof data[modelApiIdentifier] === "object") {
        data[modelApiIdentifier] = omitKeys(data[modelApiIdentifier]);
    }
    return unwindEdges(data);
};
const unwindEdges = (input) => {
    if (input !== null || (input !== undefined && typeof input === "object")) {
        if (Array.isArray(input)) {
            return input.map(unwindEdges);
        }
        if (isPlainObject(input)) {
            if (input.edges && Array.isArray(input.edges)) {
                return input.edges.map((edge) => unwindEdges(edge.node));
            }
            const result = {};
            for (const key of Object.keys(input)) {
                result[key] = unwindEdges(input[key]);
            }
            return result;
        }
        return input;
    }
};
export const disambiguateDefaultValues = (data, initialData, action) => {
    const unwindedInitialData = unwindEdges(initialData);
    const initialKeys = Object.keys(unwindedInitialData).filter((key) => !OmittedKeys.includes(key));
    const result = Object.fromEntries(Object.entries(data).flatMap(([key, value]) => {
        if (initialKeys.includes(key)) {
            return [];
        }
        return [[key, value]];
    }));
    const modelData = { ...data[action.modelApiIdentifier] };
    for (const key of Object.keys(modelData)) {
        const initialValue = unwindedInitialData[key];
        if (!!data[action.modelApiIdentifier] &&
            typeof data[action.modelApiIdentifier] === "object" &&
            key in data[action.modelApiIdentifier] &&
            !isEqual(initialValue, data[action.modelApiIdentifier][key])) {
            modelData[key] = data[action.modelApiIdentifier][key];
        }
        else if (key in data && initialValue !== data[key]) {
            if (key in data && initialValue !== data[key]) {
                modelData[key] = data[key];
            }
        }
    }
    result[action.modelApiIdentifier] = modelData;
    return result;
};
function getUpdates(data) {
    const updateList = {};
    function traverse(input, path = undefined, depth = 0, isInArray) {
        if (Array.isArray(input)) {
            return input.map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return traverse(item, currentPath, depth + 1, true);
            });
        }
        else if (input !== undefined && input !== null && typeof input === "object") {
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                result[key] = traverse(input[key], currentPath, depth + 1);
            }
            if (depth > 1) {
                const newPath = isInArray ? path?.substring(0, path.length - 2) : path;
                if ("id" in input) {
                    if (!updateList[newPath]) {
                        updateList[newPath] = [];
                    }
                    updateList[newPath].push(input["id"]);
                }
            }
            return result;
        }
        return input;
    }
    traverse(data);
    return updateList;
}
class ReshapeDataContext {
    constructor(depth, path, fieldType, fieldRelationships, parent) {
        Object.defineProperty(this, "depth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: depth
        });
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: path
        });
        Object.defineProperty(this, "fieldType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: fieldType
        });
        Object.defineProperty(this, "fieldRelationships", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: fieldRelationships
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: parent
        });
    }
}
const richTextToGraphqlApiInput = (input) => {
    return { markdown: input.markdown };
};
const storedFileToGraphqlApiInput = (input) => {
    if (input.base64) {
        return {
            fileName: input.fileName,
            mimeType: input.mimeType,
            base64: input.base64,
        };
    }
    else if (input.file) {
        return {
            fileName: input.fileName,
            mimeType: input.mimeType,
            file: input.file,
        };
    }
    else if (input.copyUrl) {
        return {
            fileName: input.fileName,
            mimeType: input.mimeType,
            copyUrl: input.copyUrl,
        };
    }
    else if (input.directUploadToken) {
        return {
            fileName: input.fileName,
            mimeType: input.mimeType,
            directUploadToken: input.directUploadToken,
        };
    }
    else {
        return undefined;
    }
};
export const reshapeDataForGraphqlApi = async (client, defaultValues, data) => {
    const referencedTypes = client[$modelRelationships];
    if (!referencedTypes) {
        throw new Error("No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app");
    }
    const updates = getUpdates(defaultValues); // grab the updates from default values to see what needs to be created, updated, or deleted
    function transform(input, context) {
        const { depth, path, fieldType, fieldRelationships } = context;
        if (path && Array.isArray(input)) {
            // If the input is an array, we need to handle it differently
            const results = [];
            let edge = undefined;
            if (fieldType && (fieldType.type == "HasMany" || fieldType.type == "HasManyThrough")) {
                edge = updates[path]; // grab the list of ids from the updates object, based on the path
            }
            const handled = [];
            if (edge) {
                // if there are ids in the updates object, we need to handle them first
                results.push(edge.map((nodeId, nodeIndex) => {
                    // for each id, find the corresponding item in the input array
                    const item = input.find((item) => item.id == nodeId); // find the item in the input array that matches the id
                    if (!item) {
                        // if the item is not found, we need to delete it from the updates object as well as anything that references it
                        const updateEntries = Object.entries(updates); // grab all the entries from the updates object
                        const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path + "." + nodeIndex));
                        if (updateEntry) {
                            // if we find an entry that matches the path, we need to delete it from the updates object
                            const { 0: updatePath, 1: _ } = updateEntry;
                            delete updates[updatePath];
                        }
                        return { delete: { id: nodeId } };
                    }
                    else {
                        const index = input.findIndex((item) => item.id == nodeId);
                        delete updates[path][nodeIndex]; // delete the id from the updates object so it's not handled again
                        handled.push(index);
                        const currentPath = path ? `${path}.${index}` : index.toString();
                        return transform(item, { depth: depth + 1, path: currentPath, fieldType, fieldRelationships, parent: context }); // transform the item
                    }
                }));
            }
            // handle the rest of the array - anything that wasn't in the updates object
            results.push(input
                .filter((_item, index) => !handled.includes(index))
                .map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return transform(item, { depth: depth + 1, path: currentPath, fieldType, fieldRelationships, parent: context });
            }));
            return results.flatMap((result) => result);
        }
        else if (isPlainObject(input)) {
            // if the input is an object, we need to handle it differently
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                const fieldType = fieldRelationships ? fieldRelationships[key] : null;
                const relationships = fieldType ? referencedTypes?.[fieldType.model] : referencedTypes?.[key];
                result[key] = transform(input[key], {
                    depth: depth + 1,
                    path: currentPath,
                    fieldType,
                    fieldRelationships: relationships,
                    parent: context,
                });
            }
            const { __typename, ...rest } = result;
            if (__typename == "RichText") {
                return richTextToGraphqlApiInput(rest);
            }
            else if (__typename == "StoredFile") {
                return storedFileToGraphqlApiInput(rest);
            }
            let belongsTo = null;
            const belongsToRelationships = fieldRelationships // grab the belongsTo relationships from the fieldRelationships object
                ? Object.entries(fieldRelationships)
                    .filter(([_key, value]) => value.type === "BelongsTo")
                    .reduce((obj, [key, value]) => {
                    obj[key] = value;
                    return obj;
                }, {})
                : null;
            for (const key of Object.keys(belongsToRelationships ?? {})) {
                // for each belongsTo relationship, check if the input has a key that matches the relationship
                if (`${key}Id` in input) {
                    if (belongsTo == null) {
                        belongsTo = {};
                    }
                    belongsTo = { ...belongsTo, [key]: { _link: input[`${key}Id`] } };
                    delete rest[`${key}Id`]; // delete the key from the rest object so it's not handled again
                }
            }
            if (belongsTo) {
                return depth <= 1 ? { ...rest, ...belongsTo } : { create: { ...rest, ...belongsTo } }; // when we're in the root, we need to return the belongsTo object as part of the result otherwise wrap it in a create
            }
            if (depth <= 1 || fieldType == null) {
                return { ...rest };
            }
            const inputHasId = "id" in input;
            const inputHasMoreFields = Object.keys(input).filter((field) => field !== "__typename").length > 1;
            const inputUpdateId = updates[path]?.[0];
            console.log({ input, result, fieldType });
            switch (fieldType.type) {
                case "HasMany":
                case "HasOne":
                case "HasManyThrough":
                    return getParentRelationshipFieldGraphqlApiInput({ input, result });
                case "BelongsTo":
                    return inputHasId
                        ? input["id"] === null
                            ? { _link: null }
                            : inputHasMoreFields
                                ? { update: { id: input["id"], ...rest } }
                                : { _link: input["id"] }
                        : inputUpdateId // input has no id, but this path was found in the updates object, so we need to delete it
                            ? { delete: { id: inputUpdateId } }
                            : { create: { ...rest } };
                default:
                    throw new Error(`Can't transform input, Unknown field type ${fieldType?.type}. ${JSON.stringify({
                        input,
                        path,
                        referencedTypes,
                    }, null, 2)}`);
            }
        }
        return input;
    }
    const result = transform(data, { depth: 0 });
    return result;
};
const getParentRelationshipFieldGraphqlApiInput = (props) => {
    const { input, result } = props;
    const { __typename, ...rest } = result;
    if ("_link" in rest && rest._link) {
        return { update: { id: rest._link } };
    }
    else if ("_unlink" in rest && rest._unlink) {
        const { id, inverseFieldApiIdentifier } = rest._unlink;
        return { update: { id, [inverseFieldApiIdentifier]: { _link: null } } };
    }
    else {
        const inputHasId = "id" in input;
        return inputHasId ? { update: { ...rest } } : { create: { ...rest } };
    }
};
export const isPlainObject = (obj) => {
    if (typeof obj !== "object" || obj === null)
        return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
};
export function transformContextAwareToSelect(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj === "ReadOnly" ? true : obj;
    }
    const result = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        const value = obj[key];
        result[key] = transformContextAwareToSelect(value);
    }
    return result;
}
export function getReadOnlyPaths(obj, prefix = "") {
    if (!obj) {
        return [];
    }
    let paths = [];
    for (const key of Object.keys(obj)) {
        let currentPath = prefix ? `${prefix}.${key}` : key;
        if (currentPath.includes("edges.node")) {
            currentPath = currentPath.replace("edges.node", "*");
        }
        if (obj[key] === "ReadOnly") {
            paths.push(currentPath);
        }
        else if (typeof obj[key] === "object" && obj[key] != null) {
            paths = paths.concat(getReadOnlyPaths(obj[key], currentPath));
        }
    }
    return paths;
}
/**
 * Uses the `select` object to remove any fields that are marked as `ReadOnly` from the `data` object.
 * Also removes any fields that isn't in the `send` array.
 */
export function applyDataMask(opts) {
    const { select, send, data, modelApiIdentifier } = opts;
    const readOnlyPaths = getReadOnlyPaths(select, modelApiIdentifier);
    // Check for relationship fields that are entirely read-only, including nested relationships
    const checkRelationshipFields = (obj, prefix = "") => {
        const relationshipFields = Object.keys(obj || {}).filter((key) => typeof obj[key] === "object" && obj[key] !== null);
        for (const field of relationshipFields) {
            const currentPrefix = prefix ? `${prefix}.${field}` : field;
            const allFieldPaths = Object.keys(obj[field]).map((subField) => `${currentPrefix}.${subField}`);
            const readOnlyFieldPaths = allFieldPaths.filter((subField) => readOnlyPaths.includes(subField));
            if (readOnlyFieldPaths.length > 0 && readOnlyFieldPaths.length === allFieldPaths.length) {
                readOnlyPaths.push(currentPrefix);
            }
            else {
                // Recursively check nested relationships
                checkRelationshipFields(obj[field], currentPrefix);
            }
        }
    };
    checkRelationshipFields(select, modelApiIdentifier);
    for (const path of readOnlyPaths) {
        unset(data, path);
    }
    if (!send)
        return data;
    const dataToSend = {};
    const sendArray = typeof send === "function" ? send() : send;
    for (const key of sendArray) {
        const candidates = [key];
        if (modelApiIdentifier) {
            candidates.push(`${modelApiIdentifier}.${key}`);
        }
        for (const key of candidates) {
            const value = get(data, key);
            if (typeof value != "undefined") {
                set(dataToSend, key, value);
                break;
            }
        }
    }
    return dataToSend;
}
//# sourceMappingURL=utils.js.map