export interface FieldSelection {
  [key: string]: boolean | null | undefined | FieldCall | FieldSelection | InlineFragment;
}

export interface BuilderOperation {
  type: "query" | "subscription" | "mutation";
  fields: FieldSelection;
  name?: string;
  directives?: string[];
}

const compileFieldSelection = (fields: FieldSelection): string[] => {
  return Object.entries(fields)
    .flatMap(([field, value]) => {
      if (typeof value === "boolean") {
        return value ? field : false;
      } else if (value instanceof FieldCall) {
        let args = "";
        const signatures = Object.entries(value.args)
          .filter(([_, value]) => value !== null && value !== undefined)
          .map(([name, value]) => {
            return `${name}: ${value instanceof Variable ? `$${value.name ?? name}` : JSON.stringify(value)}`;
          });

        if (signatures.length > 0) {
          args = `(${signatures.join(", ")})`;
        }

        if (value.subselection) {
          return [`${field}${args} {`, ...compileFieldSelection(value.subselection), `}`];
        } else {
          return `${field}${args}`;
        }
      } else if (value instanceof InlineFragment) {
        return [`... on ${field} {`, ...compileFieldSelection(value.fields), `}`];
      } else {
        return [`${field} {`, ...compileFieldSelection(value as FieldSelection), `}`];
      }
    })
    .filter((value) => !!value)
    .map((line) => "  " + line);
};

const extractVariables = (fields: FieldSelection): Record<string, Variable> => {
  const variables: Record<string, Variable> = {};
  const nextName = (name: string) => {
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
        if (value instanceof Variable) {
          variables[value.name ?? nextName(name)] = value;
        }
      });

      if (value.subselection) {
        Object.assign(variables, extractVariables(value.subselection));
      }
    } else if (value instanceof InlineFragment) {
      Object.assign(variables, extractVariables(value.fields));
    } else if (typeof value === "object" && value !== null) {
      Object.assign(variables, extractVariables(value));
    }
  });

  return variables;
};

const compileVariables = (operation: BuilderOperation) => {
  const variables = extractVariables(operation.fields);

  if (Object.keys(variables).length === 0) return "";
  const signatures = Object.entries(variables).map(([name, variable]) => {
    return `$${name}: ${variable.type}`;
  });

  return `(${signatures.join(", ")})`;
};

class FieldCall {
  constructor(readonly args: Record<string, any>, readonly subselection?: FieldSelection) {}
}

class InlineFragment {
  constructor(readonly fields: FieldSelection) {}
}

export interface VariableOptions {
  type: string;
  name?: string;
  value?: any;
  required?: boolean;
}

/** Represents one reference to a variable somewhere in a selection */
export class Variable {
  constructor(readonly type: string, readonly name?: string, readonly value?: any) {}
  present() {
    return this.value != null;
  }
}

/** Used for calling a field with arguments within the main body of a query */
export const Call = (args: Record<string, Variable | any>, subselection?: FieldSelection) => new FieldCall(args, subselection);

/** Used for calling a field with a variable within the args to a field */
export const Var = (options: VariableOptions) => new Variable(options.type + (options.required ? "!" : ""), options.name, options.value);

export const On = (fields: FieldSelection) => new InlineFragment(fields);

/** Compiles one JS object describing a query into a GraphQL string */
export const compile = (operation: BuilderOperation): string => {
  const signature = compileVariables(operation);
  const directives = operation.directives && operation.directives.length > 0 ? ` ${operation.directives.join(" ")}` : "";

  return `${operation.type} ${operation.name ?? ""}${signature}${directives} {
${compileFieldSelection(operation.fields).join("\n")}
}`;
};

/** Compiles one JS object describing a query into a GraphQL string and set of variable values for passing alongside the query */
export const compileWithVariableValues = (operation: BuilderOperation): { query: string; variables: Record<string, any> } => {
  const variables = extractVariables(operation.fields);

  return {
    query: compile(operation),
    variables: Object.entries(variables ?? {}).reduce((acc, [name, variable]) => {
      if (typeof variable.value !== "undefined") {
        acc[name] = variable.value;
      }
      return acc;
    }, {} as Record<string, any>),
  };
};
