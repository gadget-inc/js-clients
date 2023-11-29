import { Alert } from "@mui/material";
import React, { useState } from "react";

export const MUIErrorDisplay = (props: { error: Error; retry?: () => void }) => {
  const [showingError, setShowingError] = useState(false);

  return (
    <Alert severity="error">
      <p>
        An internal error occurred while trying to render this page.{" "}
        {!showingError && (
          <a href="#" onClick={() => setShowingError(true)}>
            Show details
          </a>
        )}
      </p>
      {showingError && (
        <p>
          <b>Error details</b>:<pre>{props.error.message}</pre>
          <pre>
            <code>{props.error.stack}</code>
          </pre>
        </p>
      )}
    </Alert>
  );
};
