import type { AnyErrorWrapper } from "./AnyErrorWrapper.js";
import type { AnyActionFunction, AnyBulkActionFunction } from "./GadgetFunctions.js";
import type { ChangeTracking, GadgetRecord, RecordShape } from "./GadgetRecord.js";
export interface AnyCoreImplementation {
    GadgetRecord: (new <Shape extends RecordShape>(data: Shape) => GadgetRecord<Shape>) & {
        ChangeTracking: typeof ChangeTracking;
    };
    disambiguateActionVariables: (action: AnyActionFunction, input: Record<string, any>) => Record<string, any>;
    disambiguateBulkActionVariables: (action: AnyBulkActionFunction, inputs?: Record<string, any> | Record<string, any>[]) => Record<string, any>;
    capitalizeIdentifier: (identifier: string) => string;
    wrapClientSideError: (error: any, response?: any) => AnyErrorWrapper;
    errorIfDataAbsent: (data: any, dataPath: string[], paused?: boolean) => AnyErrorWrapper | undefined;
    namespaceDataPath: (dataPath: string[], namespace?: string[] | string | null) => string[];
    camelize: (identifier: string, uppercaseFirstLetter?: boolean) => string;
    isEqual: (a: any, b: any) => boolean;
}
