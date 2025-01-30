import { File as FileIcon } from "lucide-react";
import * as React from "react";
import type { FileValueType } from "../../../../utils.js";
import { useAutoTableFileCell } from "../../../hooks/useAutoTableFileCell.js";
import type { ShadcnElements } from "../../elements.js";

export const makeShadcnAutoTableFileCell = (elements: Pick<ShadcnElements, "Label" | "Avatar" | "AvatarImage" | "AvatarFallback">) => {
  const { Label, Avatar, AvatarImage, AvatarFallback } = elements;

  function ShadcnAutoTableFileCell(props: { value: FileValueType }) {
    const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);

    return (
      <div className="flex items-center gap-2">
        <Avatar>
          {imageFileIconUrl && <AvatarImage src={imageFileIconUrl} alt={originalFileName} />}
          <AvatarFallback>{nonImageFileIndicator}</AvatarFallback>
        </Avatar>

        <Label>{formattedFileName}</Label>
      </div>
    );
  }

  return ShadcnAutoTableFileCell;
};

const nonImageFileIndicator = <FileIcon />;
