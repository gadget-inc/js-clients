"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileWithVariableValues = exports.compile = exports.Var = exports.Call = exports.Variable = void 0;
const indent = (str, depth) => {
    return str
        .split("\n")
        .map((line) => " ".repeat(depth) + line)
        .join("\n");
};
const compileFieldSelection = (fields, onlyPresentVariableValues = false) => {
    const result = Object.entries(fields)
        .map(([field, value]) => {
        if (typeof value === "boolean") {
            return value ? field : false;
        }
        else if (value instanceof FieldCall) {
            let args = "";
            let entries = Object.entries(value.args).filter(([_, value]) => value !== null && value !== undefined);
            if (onlyPresentVariableValues) {
                entries = entries.filter(([_, value]) => (value instanceof Variable ? value.present() : true));
            }
            const signatures = entries.map(([name, value]) => {
                var _a;
                return `${name}: ${value instanceof Variable ? `$${(_a = value.name) !== null && _a !== void 0 ? _a : name}` : JSON.stringify(value)}`;
            });
            if (signatures.length > 0) {
                args = `(${signatures.join(", ")})`;
            }
            const subselection = value.subselection
                ? `{ 
${compileFieldSelection(value.subselection, onlyPresentVariableValues)} 
}`
                : "";
            return `${field}${args} ${subselection}`;
        }
        else {
            return `${field} {
${compileFieldSelection(value, onlyPresentVariableValues)}
}`;
        }
    })
        .filter((value) => !!value)
        .join("\n");
    return indent(result, 2);
};
const extractVariables = (fields, onlyPresentVariableValues = false) => {
    const variables = {};
    Object.entries(fields).forEach(([field, value]) => {
        if (value instanceof FieldCall) {
            Object.entries(value.args).forEach(([name, value]) => {
                var _a;
                if (value instanceof Variable) {
                    variables[(_a = value.name) !== null && _a !== void 0 ? _a : name] = value;
                }
            });
        }
        else if (typeof value === "object" && value !== null) {
            Object.assign(variables, extractVariables(value));
        }
    });
    if (onlyPresentVariableValues) {
        for (const [name, variable] of Object.entries(variables)) {
            if (variable.value == null) {
                delete variables[name];
            }
        }
    }
    return variables;
};
const compileVariables = (operation, onlyPresentVariableValues = false) => {
    const variables = extractVariables(operation.fields, onlyPresentVariableValues);
    if (Object.keys(variables).length === 0)
        return "";
    const signatures = Object.entries(variables).map(([name, variable]) => {
        return `$${name}: ${variable.type}${variable.required ? "!" : ""}`;
    });
    return `(${signatures.join(", ")})`;
};
class FieldCall {
    constructor(args, subselection) {
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: args
        });
        Object.defineProperty(this, "subselection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: subselection
        });
    }
}
/** Represents one reference to a variable somewhere in a selection */
class Variable {
    constructor(type, required = false, name, value) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        Object.defineProperty(this, "required", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: required
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    present() {
        return this.value != null;
    }
}
exports.Variable = Variable;
/** Used for calling a field with arguments within the main body of a query */
const Call = (args, subselection) => new FieldCall(args, subselection);
exports.Call = Call;
/** Used for calling a field with a variable within the args to a field */
const Var = (options) => new Variable(options.type, options.required, options.name, options.value);
exports.Var = Var;
/** Compiles one JS object describing a query into a GraphQL string */
const compile = (operation, onlyPresentVariableValues = false) => {
    var _a;
    const signature = compileVariables(operation, onlyPresentVariableValues);
    const directives = operation.directives && operation.directives.length > 0 ? ` ${operation.directives.join(" ")}` : "";
    return `${operation.type} ${(_a = operation.name) !== null && _a !== void 0 ? _a : ""}${signature}${directives} {
${compileFieldSelection(operation.fields, onlyPresentVariableValues)}
}`;
};
exports.compile = compile;
/** Compiles one JS object describing a query into a GraphQL string and set of variable values for passing alongside the query */
const compileWithVariableValues = (operation) => {
    const variables = extractVariables(operation.fields, true);
    return {
        query: (0, exports.compile)(operation, true),
        variables: Object.entries(variables !== null && variables !== void 0 ? variables : {}).reduce((acc, [name, variable]) => {
            acc[name] = variable.value;
            return acc;
        }, {}),
    };
};
exports.compileWithVariableValues = compileWithVariableValues;
//# sourceMappingURL=index.js.map