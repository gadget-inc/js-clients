import { assert } from "@gadgetinc/api-client-core";
import React from "react";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const RelationshipContext = React.createContext(undefined);
export const useRelationshipContext = () => {
    return React.useContext(RelationshipContext);
};
export const useAutoRelationship = (props) => {
    const { field } = props;
    const formMetadata = useAutoFormMetadata();
    const model = assert(formMetadata.model, "useAutoRelationship must be used within an AutoForm for a model");
    const { path, metadata } = useFieldMetadata(field);
    const pathPrefix = path.replace(new RegExp(`^${model.apiIdentifier}\\.`), "");
    return {
        path,
        metadata,
        pathPrefix,
    };
};
//# sourceMappingURL=useAutoRelationship.js.map