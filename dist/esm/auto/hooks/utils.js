/** Allows the use of multiple refs with one component */
export const multiref = (...refs) => {
    return (value) => {
        for (const ref of refs) {
            if (ref) {
                if (typeof ref == "function") {
                    ref(value);
                }
                else {
                    ref.current = value;
                }
            }
        }
    };
};
//# sourceMappingURL=utils.js.map