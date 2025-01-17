import { cn } from "../utils.js";
import * as React from "react";

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  return (
    <form
      ref={ref}
      className={cn(
        "space-y-6",
        className
      )}
      {...props}
    />
  );
});
Form.displayName = "Form";

export { Form }; 