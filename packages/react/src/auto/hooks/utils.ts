import { type GadgetFieldType } from "../../internal/gql/graphql.js";

/** Allows the use of multiple refs with one component */
export const multiref = <T>(...refs: (React.Ref<T> | null | undefined)[]) => {
  return (value: T) => {
    for (const ref of refs) {
      if (ref) {
        if (typeof ref == "function") {
          ref(value);
        } else {
          (ref as any).current = value;
        }
      }
    }
  };
};

export const assertFieldType = (props: {
  fieldApiIdentifier: string;
  actualFieldType: GadgetFieldType;
  expectedFieldType: GadgetFieldType;
}) => {
  const { fieldApiIdentifier, actualFieldType, expectedFieldType } = props;

  if (actualFieldType !== expectedFieldType) {
    throw new Error(
      `Field "${fieldApiIdentifier}" is not a ${expectedFieldType} field. Only ${expectedFieldType} fields are supported for this input type`
    );
  }
};
