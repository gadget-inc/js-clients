import React, { useMemo } from "react";
import {
  getRunActionConfirmationText,
  useAutoTableBulkActionModal,
  useGadgetBulkActionModalContent,
  type AutoBulkActionModal,
  type GadgetBulkActionModalContentProps,
} from "../../hooks/useTableBulkActions.js";
import { PolarisWCModal } from "../commonComponents/PolarisWCModal.js";

export const PolarisWCAutoBulkActionModal = (props: AutoBulkActionModal) => {
  const { model, modelActionDetails, ids } = props;

  const { actionIsLoaded, closeAndClear, close, isBulkGadgetAction, modalTitle, showModal } = useAutoTableBulkActionModal(props);

  if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
    return null;
  }

  return (
    <PolarisWCModal
      open={showModal}
      onOpenChange={(open) => {
        if (!open) close();
      }}
      heading={modalTitle}
    >
      <GadgetBulkActionModalContent
        model={model}
        modelActionDetails={modelActionDetails}
        actionLabel={modalTitle}
        ids={ids}
        close={closeAndClear}
      />
    </PolarisWCModal>
  );
};

/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props: GadgetBulkActionModalContentProps) => {
  const { ids, close } = props;
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
          <s-button variant="secondary" onClick={close}>
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
