import { AnyErrorWrapper } from "./AnyErrorWrapper.js";
import { AnyGadgetRecord } from "./AnyGadgetRecord.js";
import { AnyActionFunction, AnyBulkActionFunction } from "./GadgetFunctions.js";
export interface AnyCoreImplementation {
    GadgetRecord: AnyGadgetRecord<any>;
    disambiguateActionVariables: (action: AnyActionFunction, input: Record<string, any>) => Record<string, any>;
    disambiguateBulkActionVariables: (action: AnyBulkActionFunction, inputs?: Record<string, any> | Record<string, any>[]) => Record<string, any>;
    capitalizeIdentifier: (identifier: string) => string;
    wrapClientSideError: (error: any, response?: any) => AnyErrorWrapper;
    errorIfDataAbsent: (data: any, dataPath: string[], paused?: boolean) => AnyErrorWrapper | undefined;
    namespaceDataPath: (dataPath: string[], namespace?: string[] | string | null) => string[];
    camelize: (identifier: string, uppercaseFirstLetter?: boolean) => string;
    isEqual: (a: any, b: any) => boolean;
}
