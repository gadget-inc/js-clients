import React from "react";
import { useFormContext } from "../../src/useActionForm.js";

/** debug component for explicitly rendering out the form state for visual inspection in tests */
export const DebugFormState = () => {
  const { formState, getValues } = useFormContext();
  return (
    <div>
      <h2>
        <pre>formState</pre>
      </h2>
      <code>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </code>
      <h2>
        <pre>values</pre>
      </h2>
      <code>
        <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      </code>
    </div>
  );
};
