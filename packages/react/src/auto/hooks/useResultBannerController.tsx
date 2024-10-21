import { useCallback, useEffect, useState } from "react";
import { isModelActionMetadata } from "../../metadata.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";

export const useResultBannerController = () => {
  const { metadata, submitResult } = useAutoFormMetadata();

  const [isDismissed, setIsDismissed] = useState(false);
  const hide = useCallback(() => setIsDismissed(true), []);

  useEffect(() => {
    setIsDismissed(false);
  }, [submitResult?.isSuccessful, submitResult?.error]);

  let title;
  if (submitResult?.isSuccessful) {
    title = metadata && isModelActionMetadata(metadata) ? `Saved ${`${metadata?.name} `}successfully.` : `${metadata?.name} succeeded.`;
  } else {
    title = submitResult?.error?.message;
  }

  return {
    show: !isDismissed && (submitResult?.isSuccessful || submitResult?.error),
    hide,
    successful: submitResult?.isSuccessful,
    title,
  };
};
