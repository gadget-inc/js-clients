"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDataMask = exports.getReadOnlyPaths = exports.transformContextAwareToSelect = exports.isPlainObject = exports.reshapeDataForGraphqlApi = exports.disambiguateDefaultValues = exports.toDefaultValues = exports.processDefaultValues = exports.useFindExistingRecord = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const useFindBy_js_1 = require("../useFindBy.js");
const useFindOne_js_1 = require("../useFindOne.js");
const utils_js_1 = require("../utils.js");
const noopUseFindExistingRecordResponse = [
    { fetching: false },
    () => undefined, // no-op callback
];
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (modelManager, findBy, options) => {
    if (!modelManager || !findBy) {
        return noopUseFindExistingRecordResponse;
    }
    // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
    if (typeof findBy === "string") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, useFindOne_js_1.useFindOne)(modelManager, findBy, options);
    }
    const isValidFindByObject = typeof findBy === "object" && !Array.isArray(findBy) && Object.keys(findBy).length;
    if (isValidFindByObject) {
        const [findByKey, findByValue] = Object.entries(findBy)[0];
        const findByOperationName = `findBy${(0, api_client_core_1.camelize)(findByKey)}`;
        if (!(findByOperationName in modelManager)) {
            if (options.throwOnInvalidFindByObject === undefined || options.throwOnInvalidFindByObject) {
                throw new Error(`Invalid findBy object: ${JSON.stringify(findBy)}. ${findByOperationName} is not a valid findBy operation for this model.`);
            }
            return noopUseFindExistingRecordResponse;
        }
        const finder = modelManager[findByOperationName];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindBy_js_1.useFindBy(finder, findByValue, options);
    }
    return noopUseFindExistingRecordResponse;
};
exports.useFindExistingRecord = useFindExistingRecord;
const OmittedKeys = ["id", "createdAt", "updatedAt", "__typename"];
const omitKeys = (data) => {
    const newData = { ...data };
    for (const key of OmittedKeys) {
        delete newData[key];
    }
    return newData;
};
const processDefaultValues = (opts) => {
    const { modelApiIdentifier, data, defaultValues } = opts;
    convertRoleObjectListIntoStringList(data); // Incoming role objects arrays need to be converted to role key string arrays because the API will only accept role keys
    const modelDefaultValues = (0, exports.toDefaultValues)(modelApiIdentifier, data);
    const result = opts.hasAmbiguousDefaultValues
        ? { ...defaultValues, [modelApiIdentifier]: modelDefaultValues }
        : { ...defaultValues, ...modelDefaultValues, [modelApiIdentifier]: modelDefaultValues };
    return result;
};
exports.processDefaultValues = processDefaultValues;
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
const toDefaultValues = (modelApiIdentifier, data) => {
    data = omitKeys(data);
    if (modelApiIdentifier && data[modelApiIdentifier] && typeof data[modelApiIdentifier] === "object") {
        data[modelApiIdentifier] = omitKeys(data[modelApiIdentifier]);
    }
    return unwindEdges(data);
};
exports.toDefaultValues = toDefaultValues;
const unwindEdges = (input) => {
    if (input !== null || (input !== undefined && typeof input === "object")) {
        if (Array.isArray(input)) {
            return input.map(unwindEdges);
        }
        if ((0, exports.isPlainObject)(input)) {
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
const disambiguateDefaultValues = (data, initialData, action) => {
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
            !(0, api_client_core_1.isEqual)(initialValue, data[action.modelApiIdentifier][key])) {
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
exports.disambiguateDefaultValues = disambiguateDefaultValues;
function getRecordIdsAtPath(data) {
    const updateList = {};
    function traverse(input, path = undefined, depth = 0, isInArray) {
        if (Array.isArray(input)) {
            return input.flatMap((item) => {
                const indexId = (0, exports.isPlainObject)(item) && "id" in item ? item.id : undefined;
                if (!indexId) {
                    return [];
                }
                const currentPath = path ? `${path}.${indexId}` : indexId.toString();
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
                const newPath = isInArray ? path?.split(".").slice(0, -1).join(".") : path;
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
    constructor(depth, path, idPath, fieldType, fieldRelationships, parent) {
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
        Object.defineProperty(this, "idPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: idPath
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
const reshapeDataForGraphqlApi = async (client, defaultValues, data) => {
    const referencedTypes = client[api_client_core_1.$modelRelationships];
    if (!referencedTypes) {
        throw new Error("No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app");
    }
    const recordIdsAtPath = getRecordIdsAtPath(defaultValues); // grab the updates from default values to see what needs to be created, updated, or deleted
    function transform(input, context) {
        const { depth, path, fieldType, fieldRelationships, idPath } = context;
        if (path && Array.isArray(input)) {
            // If the input is an array, we need to handle it differently
            const results = [];
            let edge = undefined;
            if (fieldType && idPath && (fieldType.type == "HasMany" || fieldType.type == "HasManyThrough")) {
                edge = recordIdsAtPath[idPath]; // grab the list of ids from the updates object, based on the path
            }
            const handled = [];
            if (edge && idPath) {
                // if there are ids in the updates object, we need to handle them first
                results.push(edge.map((nodeId, nodeIndex) => {
                    // for each id, find the corresponding item in the input array
                    const item = input.find((item) => item.id == nodeId); // find the item in the input array that matches the id
                    if (!item) {
                        // if the item is not found, we need to delete it from the updates object as well as anything that references it
                        const updateEntries = Object.entries(recordIdsAtPath); // grab all the entries from the updates object
                        const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path + "." + nodeId));
                        if (updateEntry) {
                            // if we find an entry that matches the path, we need to delete it from the updates object
                            const { 0: updatePath, 1: _ } = updateEntry;
                            delete recordIdsAtPath[updatePath];
                        }
                        return { delete: { id: nodeId } };
                    }
                    else {
                        const index = input.findIndex((item) => item.id == nodeId);
                        delete recordIdsAtPath[idPath][nodeIndex]; // delete the id from the updates object so it's not handled again
                        handled.push(index);
                        const currentPath = path ? `${path}.${index}` : index.toString();
                        const currentIdPath = idPath && (0, exports.isPlainObject)(item) && item.id ? `${idPath}.${item.id}` : undefined;
                        return transform(item, {
                            depth: depth + 1,
                            path: currentPath,
                            idPath: currentIdPath,
                            fieldType,
                            fieldRelationships,
                            parent: context,
                        }); // transform the item
                    }
                }));
            }
            // handle the rest of the array - anything that wasn't in the updates object
            results.push(input
                .filter((_item, index) => !handled.includes(index))
                .map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                const currentIdPath = idPath && (0, exports.isPlainObject)(item) && item.id ? `${idPath}.${item.id}` : undefined;
                return transform(item, {
                    depth: depth + 1,
                    path: currentPath,
                    idPath: currentIdPath,
                    fieldType,
                    fieldRelationships,
                    parent: context,
                });
            }));
            return results.flatMap((result) => result);
        }
        else if ((0, exports.isPlainObject)(input)) {
            // if the input is an object, we need to handle it differently
            let result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                const currentIdPath = idPath ? `${idPath}.${key}` : key;
                const fieldType = fieldRelationships ? fieldRelationships[key] : null;
                const relationships = fieldType ? referencedTypes?.[fieldType.model] : referencedTypes?.[key];
                result[key] = transform(input[key], {
                    depth: depth + 1,
                    path: currentPath,
                    idPath: currentIdPath,
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
                result = { ...rest, ...belongsTo };
            }
            else {
                result = rest;
            }
            if (depth <= 1 || fieldType == null) {
                return result;
            }
            switch (fieldType.type) {
                case "HasOne":
                    return getHasOneGraphqlApiInput({ input, result, defaultValues, path: path });
                case "HasMany":
                case "HasManyThrough":
                    return getHasManyGraphqlApiInput({ input, result });
                case "BelongsTo":
                    return getBelongsToGraphqlApiInput({ input, result, recordIdsAtPath, idPath });
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
exports.reshapeDataForGraphqlApi = reshapeDataForGraphqlApi;
const getBelongsToGraphqlApiInput = (props) => {
    const { input, result, recordIdsAtPath, idPath } = props;
    const { __typename, ...rest } = result;
    const inputHasLink = !!("_link" in input && input._link);
    if (inputHasLink) {
        return { _link: input._link };
    }
    const inputHasUnlink = !!("_unlink" in input && input._unlink);
    if (inputHasUnlink) {
        return { _link: null };
    }
    const inputHasId = "id" in input;
    const inputHasMoreNonIdFields = Object.keys(input).filter((field) => field !== "id" && field !== "__typename").length > 0;
    if (inputHasId) {
        if (input["id"] === null) {
            return { _link: null };
        }
        if (inputHasMoreNonIdFields) {
            return { update: { id: input["id"], ...rest } };
        }
        return { _link: input["id"] };
    }
    const inputUpdateId = idPath && recordIdsAtPath[idPath] && recordIdsAtPath[idPath].length > 0 ? recordIdsAtPath[idPath][0] : undefined;
    if (inputUpdateId && !inputHasMoreNonIdFields) {
        return { _link: null };
    }
    return { create: { ...rest } };
};
const getHasOneGraphqlApiInput = (props) => {
    const { input, result, defaultValues, path } = props;
    const { __typename, ...rest } = result;
    const currentValue = (0, utils_js_1.get)(defaultValues, path);
    const currentId = currentValue?.id;
    const newId = rest._link ?? input.id;
    if ("_unlink" in input && input._unlink) {
        const { _unlink, __replace, // To indicate that we are replacing the current record with a new one
        ...nonUnlinkParams } = input;
        const additionalActions = !__replace || Object.keys(nonUnlinkParams).length === 0
            ? {}
            : "id" in nonUnlinkParams && nonUnlinkParams.id
                ? { update: nonUnlinkParams }
                : { create: nonUnlinkParams };
        return { _unlink, ...additionalActions };
    }
    const unlink = currentId && currentId !== newId ? { _unlink: currentId } : undefined;
    if ("_link" in rest && rest._link) {
        return { update: { id: rest._link }, ...unlink };
    }
    const inputHasId = "id" in input;
    return inputHasId ? { update: { ...rest }, ...unlink } : { create: { ...rest }, ...unlink };
};
const getHasManyGraphqlApiInput = (props) => {
    const { input, result } = props;
    const { __typename, ...rest } = result;
    if ("_link" in rest && rest._link) {
        return { update: { id: rest._link } };
    }
    if ("_unlink" in rest && rest._unlink) {
        const { id, inverseFieldApiIdentifier } = rest._unlink;
        return { update: { id, [inverseFieldApiIdentifier]: { _link: null } } };
    }
    const inputHasId = "id" in input;
    return inputHasId ? { update: { ...rest } } : { create: { ...rest } };
};
const isPlainObject = (obj) => {
    if (typeof obj !== "object" || obj === null)
        return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
};
exports.isPlainObject = isPlainObject;
function transformContextAwareToSelect(obj) {
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
exports.transformContextAwareToSelect = transformContextAwareToSelect;
function getReadOnlyPaths(obj, prefix = "") {
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
exports.getReadOnlyPaths = getReadOnlyPaths;
/**
 * Uses the `select` object to remove any fields that are marked as `ReadOnly` from the `data` object.
 * Also removes any fields that isn't in the `send` array.
 */
function applyDataMask(opts) {
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
        (0, utils_js_1.unset)(data, path);
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
            const value = (0, utils_js_1.get)(data, key);
            if (typeof value != "undefined") {
                const pathSegments = key.split(".");
                const parentPath = pathSegments.slice(0, -1).join(".");
                const parentValue = (0, utils_js_1.get)(dataToSend, parentPath);
                if (parentValue !== null) {
                    (0, utils_js_1.set)(dataToSend, key, value);
                }
                break;
            }
        }
    }
    return dataToSend;
}
exports.applyDataMask = applyDataMask;
//# sourceMappingURL=utils.js.map