import * as React from "react";
import { cn } from "../utils.js";

const Form = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(({ className, ...props }, ref) => {
  return <form ref={ref} noValidate className={cn("space-y-6", className)} {...props} />;
});
Form.displayName = "Form";

export { Form };
