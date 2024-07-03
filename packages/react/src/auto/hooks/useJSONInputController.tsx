import { useCallback, useEffect, useState } from "react";
import { type Control } from "react-hook-form";
import { useStringInputController } from "./useStringInputController.js";

export const useJSONInputController = (props: {
  field: string; // The field API identifier
  control?: Control<any>;
}) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  const [error, setError] = useState<Error | undefined>();
  const [jsonValue, setJSONValue] = useState<any>(stringInputController.value);
  const [stringValue, setStringValue] = useState<string>(JSON.stringify(jsonValue, null, 2));

  const onStringValueChange = useCallback(
    (newString: string) => {
      setStringValue(newString);
      try {
        const newJSON = JSON.parse(newString);
        setJSONValue(newJSON);
        setError(undefined);
        stringInputController.onChange(newJSON);
      } catch (error: any) {
        if (newString !== "") {
          setError(error);
        } else {
          setError(undefined);
        }
      }
    },
    [stringInputController]
  );

  useEffect(() => {
    if (typeof stringValue === "undefined" && JSON.stringify(stringInputController.value) !== "") {
      setStringValue(JSON.stringify(stringInputController.value, null, 2));
    }
  }, [stringValue, stringInputController.value]);

  return {
    onStringValueChange,
    error,
    stringValue,
    jsonValue,
    originalController: stringInputController,
  };
};
