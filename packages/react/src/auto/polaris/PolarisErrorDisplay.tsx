import { Banner, Link } from "@shopify/polaris";
import React, { useState } from "react";

export const PolarisErrorDisplay = (props: { error: Error; retry?: () => void }) => {
  const [showingError, setShowingError] = useState(false);

  return (
    <Banner title="An error occurred" tone="critical" action={props.retry ? { content: "Retry" } : undefined}>
      <p>
        An internal error occurred while trying to render this page.{" "}
        {!showingError && (
          <Link url="#" onClick={() => setShowingError(true)}>
            Show details
          </Link>
        )}
      </p>
      <p>Please refresh and try again.</p>
      {showingError && (
        <p>
          <b>Error details</b>:<pre>{props.error.message}</pre>
          <pre>
            <code>{props.error.stack}</code>
          </pre>
        </p>
      )}
    </Banner>
  );
};
