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
