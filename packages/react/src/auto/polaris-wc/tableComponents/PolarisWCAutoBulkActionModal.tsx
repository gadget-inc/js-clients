import React, { useMemo } from "react";
import {
  getRunActionConfirmationText,
  useGadgetBulkActionModalContent,
  type GadgetBulkActionModalContentProps,
  type ModelActionDetails,
} from "../../hooks/useTableBulkActions.js";
import { humanizeCamelCase } from "../../../utils.js";
import { PolarisWCModal } from "../commonComponents/PolarisWCModal.js";

export type PolarisWCAutoBulkActionModalProps = {
  model: any;
  modelActionDetails: ModelActionDetails;
  ids: string[];
  clearSelection: () => void;
  modalId: string;
};

export const PolarisWCAutoBulkActionModal = (props: PolarisWCAutoBulkActionModalProps) => {
  const { model, modelActionDetails, ids, clearSelection, modalId } = props;

  const modalTitle = useMemo(
    () => humanizeCamelCase(modelActionDetails.apiIdentifier).replace("Bulk ", ""),
    [modelActionDetails.apiIdentifier]
  );

  return (
    <PolarisWCModal id={modalId} heading={modalTitle}>
      <s-box padding="base">
        <GadgetBulkActionModalContent
          model={model}
          modelActionDetails={modelActionDetails}
          actionLabel={modalTitle}
          ids={ids}
          close={clearSelection}
          modalId={modalId}
        />
      </s-box>
    </PolarisWCModal>
  );
};

/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props: GadgetBulkActionModalContentProps & { modalId: string }) => {
  const { ids, close, modalId } = props;
  const { hasRun, actionResultMessage, fetching, hasError, runAction } = useGadgetBulkActionModalContent(props);

  return (
    <>
      <s-box>
        {fetching && <CenteredSpinner />}
        {!fetching &&
          (hasRun ? (
            <s-box paddingBlockEnd="base">
              <s-banner tone={hasError ? "critical" : "success"}>{actionResultMessage}</s-banner>
            </s-box>
          ) : (
            <RunActionConfirmationText count={ids.length} />
          ))}
      </s-box>

      <s-box>
        <s-stack direction="inline" gap="small" justifyContent="end">
          <s-button variant="secondary" commandFor={modalId} command="--hide" onClick={close}>
            Close
          </s-button>
          {((!hasError && !hasRun) || fetching) && (
            <s-button variant="primary" loading={fetching} onClick={runAction}>
              Run
            </s-button>
          )}
        </s-stack>
      </s-box>
    </>
  );
};

const CenteredSpinner = () => (
  <s-stack alignItems="center" justifyContent="center">
    <s-spinner accessibilityLabel="Running action" size="large" />
  </s-stack>
);

const RunActionConfirmationText = (props: { count: number }) => {
  const { count } = props;
  return useMemo(() => <s-text>{getRunActionConfirmationText(count)}</s-text>, [count]);
};
