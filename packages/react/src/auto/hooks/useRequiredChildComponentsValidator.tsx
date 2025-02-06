import { Children } from "react";

export function useRequiredChildComponentsValidator(props: { children?: React.ReactNode }, componentName: string) {
  if (!props.children || Children.count(props.children) === 0) {
    throw new Error(`"${componentName}" requires child components`);
  }
}
