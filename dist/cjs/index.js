"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileWithVariableValues = exports.compile = exports.Var = exports.Call = exports.Variable = void 0;
const compileFieldSelection = (fields) => {
    return Object.entries(fields)
        .flatMap(([field, value]) => {
        if (typeof value === "boolean") {
            return value ? field : false;
        }
        else if (value instanceof FieldCall) {
            let args = "";
            const signatures = Object.entries(value.args)
                .filter(([_, value]) => value !== null && value !== undefined)
                .map(([name, value]) => {
                var _a;
                return `${name}: ${value instanceof Variable ? `$${(_a = value.name) !== null && _a !== void 0 ? _a : name}` : JSON.stringify(value)}`;
            });
            if (signatures.length > 0) {
                args = `(${signatures.join(", ")})`;
            }
            if (value.subselection) {
                return [`${field}${args} {`, ...compileFieldSelection(value.subselection), `}`];
            }
            else {
                return `${field}${args}`;
            }
        }
        else {
            return [`${field} {`, ...compileFieldSelection(value), `}`];
        }
    })
        .filter((value) => !!value)
        .map((line) => "  " + line);
};
const extractVariables = (fields) => {
    const variables = {};
    const nextName = (name) => {
        let count = 1;
        if (variables[name]) {
            while (variables[`${name}${count}`]) {
                count++;
            }
            return `${name}${count}`;
        }
        return name;
    };
    Object.entries(fields).forEach(([_field, value]) => {
        if (value instanceof FieldCall) {
            Object.entries(value.args).forEach(([name, value]) => {
                var _a;
                if (value instanceof Variable) {
                    variables[(_a = value.name) !== null && _a !== void 0 ? _a : nextName(name)] = value;
                }
            });
        }
        else if (typeof value === "object" && value !== null) {
            Object.assign(variables, extractVariables(value));
        }
    });
    return variables;
};
const compileVariables = (operation) => {
    const variables = extractVariables(operation.fields);
    if (Object.keys(variables).length === 0)
        return "";
    const signatures = Object.entries(variables).map(([name, variable]) => {
        return `$${name}: ${variable.type}`;
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
    constructor(type, name, value) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
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
const Var = (options) => new Variable(options.type + (options.required ? "!" : ""), options.name, options.value);
exports.Var = Var;
/** Compiles one JS object describing a query into a GraphQL string */
const compile = (operation) => {
    var _a;
    const signature = compileVariables(operation);
    const directives = operation.directives && operation.directives.length > 0 ? ` ${operation.directives.join(" ")}` : "";
    return `${operation.type} ${(_a = operation.name) !== null && _a !== void 0 ? _a : ""}${signature}${directives} {
${compileFieldSelection(operation.fields).join("\n")}
}`;
};
exports.compile = compile;
/** Compiles one JS object describing a query into a GraphQL string and set of variable values for passing alongside the query */
const compileWithVariableValues = (operation) => {
    const variables = extractVariables(operation.fields);
    return {
        query: (0, exports.compile)(operation),
        variables: Object.entries(variables !== null && variables !== void 0 ? variables : {}).reduce((acc, [name, variable]) => {
            if (typeof variable.value !== "undefined") {
                acc[name] = variable.value;
            }
            return acc;
        }, {}),
    };
};
exports.compileWithVariableValues = compileWithVariableValues;
//# sourceMappingURL=index.js.map