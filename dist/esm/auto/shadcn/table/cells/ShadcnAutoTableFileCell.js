import { File as FileIcon } from "lucide-react";
import * as React from "react";
import { useAutoTableFileCell } from "../../../hooks/useAutoTableFileCell.js";
export const makeShadcnAutoTableFileCell = (elements) => {
    const { Label, Avatar, AvatarImage, AvatarFallback } = elements;
    function ShadcnAutoTableFileCell(props) {
        const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);
        return (React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement(Avatar, null,
                imageFileIconUrl && React.createElement(AvatarImage, { src: imageFileIconUrl, alt: originalFileName }),
                React.createElement(AvatarFallback, null, nonImageFileIndicator)),
            React.createElement(Label, null, formattedFileName)));
    }
    return ShadcnAutoTableFileCell;
};
const nonImageFileIndicator = React.createElement(FileIcon, null);
//# sourceMappingURL=ShadcnAutoTableFileCell.js.map