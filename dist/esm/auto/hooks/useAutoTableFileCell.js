import { useMemo } from "react";
import { imageFileTypes } from "./useFileInputController.js";
const MAX_FILE_NAME_LENGTH = 12;
export const useAutoTableFileCell = (props) => {
    const { value } = props;
    const originalFileName = value.fileName;
    const formattedFileName = useMemo(() => {
        const segments = originalFileName.split(".");
        if (segments.length > 1) {
            let name = segments.slice(0, -1).join(".");
            const extension = segments.pop();
            if (name.length > MAX_FILE_NAME_LENGTH) {
                // Truncate the name if it's too long
                name = name.substring(0, MAX_FILE_NAME_LENGTH) + "(..)";
            }
            // Join the name and extension back together
            return [name, extension].join(".");
        }
        else {
            // Return the original name if there's no extension
            return originalFileName;
        }
    }, [originalFileName]);
    const imageFileIconUrl = imageFileTypes.includes(value.mimeType) ? value.url : undefined;
    return { originalFileName, formattedFileName, imageFileIconUrl };
};
//# sourceMappingURL=useAutoTableFileCell.js.map