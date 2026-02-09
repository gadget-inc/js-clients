import React from "react";
import type { FileValueType } from "../../../utils.js";
import { useAutoTableFileCell } from "../../hooks/useAutoTableFileCell.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";

export const PolarisWCAutoTableFileCell = (props: { value: FileValueType }) => {
  const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <FileIcon originalFileName={originalFileName} imageFileIconUrl={imageFileIconUrl} />
      <PolarisWCTruncatedTextWithTooltip text={formattedFileName} />
    </div>
  );
};

const FileIcon = (props: { originalFileName: string; imageFileIconUrl?: string }) => {
  const { originalFileName, imageFileIconUrl } = props;

  return (
    <div style={{ minWidth: "32px" }}>
      {imageFileIconUrl ? (
        <s-clickable border="base" borderRadius="base" overflow="hidden" inlineSize="32px" blockSize="32px">
          <s-image objectFit="cover" src={imageFileIconUrl} alt={originalFileName} />
        </s-clickable>
      ) : (
        <s-icon type="file" />
      )}
    </div>
  );
};
