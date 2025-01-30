import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export const StorybookErrorBoundary = (props: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <>
          <h1>AutoForm render error</h1>
          <h1>{error && error.message}</h1>
        </>
      )}
    >
      {props.children}
    </ErrorBoundary>
  );
};
