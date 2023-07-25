export interface FieldSelection {
  [key: string]: boolean | null | undefined | FieldCall | FieldSelection;
}

export interface BuilderOperation {
  type: "query" | "subscription" | "mutation";
  fields: FieldSelection;
  name?: string;
  directives?: string[];
}

const indent = (str: string, depth: number) => {
  return str
    .split("\n")
    .map((line) => " ".repeat(depth) + line)
    .join("\n");
};

const compileFieldSelection = (fields: FieldSelection, onlyPresentVariableValues = false): string => {
  const result = Object.entries(fields)
    .map(([field, value]) => {
      if (typeof value === "boolean") {
        return value ? field : false;
      } else if (value instanceof FieldCall) {
        let args = "";
        let entries = Object.entries(value.args).filter(([_, value]) => value !== null && value !== undefined);

        if (onlyPresentVariableValues) {
          entries = entries.filter(([_, value]) => (value instanceof Variable ? value.hasValue() : true));
        }

        const signatures = entries.map(([name, value]) => {
          return `${name}: ${value instanceof Variable ? `$${value.name ?? name}` : JSON.stringify(value)}`;
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
      } else {
        return `${field} {
${compileFieldSelection(value as FieldSelection, onlyPresentVariableValues)}
}`;
      }
    })
    .filter((value) => !!value)
    .join("\n");

  return indent(result, 2);
};

const extractVariables = (fields: FieldSelection, onlyPresentVariableValues = false): Record<string, Variable> => {
  const variables: Record<string, Variable> = {};
  Object.entries(fields).forEach(([field, value]) => {
    if (value instanceof FieldCall) {
      Object.entries(value.args).forEach(([name, value]) => {
        if (value instanceof Variable) {
          variables[value.name ?? name] = value;
        }
      });
    } else if (typeof value === "object" && value !== null) {
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

const compileVariables = (operation: BuilderOperation, onlyPresentVariableValues = false) => {
  const variables = extractVariables(operation.fields, onlyPresentVariableValues);

  if (Object.keys(variables).length === 0) return "";
  const signatures = Object.entries(variables).map(([name, variable]) => {
    return `$${name}: ${variable.type}`;
  });

  return `(${signatures.join(", ")})`;
};

class FieldCall {
  constructor(readonly args: Record<string, any>, readonly subselection?: FieldSelection) {}
}

export interface VariableOptions {
  type: string;
  name?: string;
  value?: any;
}

/** Represents one reference to a variable somewhere in a selection */
export class Variable {
  constructor(readonly type: string, readonly name?: string, readonly value?: any) {}
  hasValue() {
    return this.value != null;
  }
}

/** Used for calling a field with arguments within the main body of a query */
export const Call = (args: Record<string, Variable | any>, subselection?: FieldSelection) => new FieldCall(args, subselection);

/** Used for calling a field with a variable within the args to a field */
export const Var = (options: VariableOptions) => new Variable(options.type, options.name, options.value);

/** Compiles one JS object describing a query into a GraphQL string */
export const compile = (operation: BuilderOperation, onlyPresentVariableValues = false): string => {
  const signature = compileVariables(operation, onlyPresentVariableValues);
  const directives = operation.directives && operation.directives.length > 0 ? ` ${operation.directives.join(" ")}` : "";

  return `${operation.type} ${operation.name ?? ""}${signature}${directives} {
${compileFieldSelection(operation.fields, onlyPresentVariableValues)}
}`;
};

/** Compiles one JS object describing a query into a GraphQL string and set of variable values for passing alongside the query */
export const compileWithVariableValues = (operation: BuilderOperation): { query: string; variables: Record<string, any> } => {
  const variables = extractVariables(operation.fields, true);

  return {
    query: compile(operation, true),
    variables: Object.entries(variables ?? {}).reduce((acc, [name, variable]) => {
      acc[name] = variable.value;
      return acc;
    }, {} as Record<string, any>),
  };
};
