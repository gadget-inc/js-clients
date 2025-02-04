import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import {
  getRunActionConfirmationText,
  useAutoTableBulkActionModal,
  useGadgetBulkActionModalContent,
  type AutoBulkActionModal,
  type GadgetBulkActionModalContentProps,
} from "../hooks/useTableBulkActions.js";

export const PolarisAutoBulkActionModal = (props: AutoBulkActionModal) => {
  const { model, modelActionDetails, ids } = props;

  const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = useAutoTableBulkActionModal(props);

  if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
    return null;
  }

  return (
    <>
      <Modal onClose={closeAndClear} title={modalTitle} open={showModal}>
        <GadgetBulkActionModalContent
          model={model}
          modelActionDetails={modelActionDetails}
          actionLabel={modalTitle}
          ids={ids}
          close={closeAndClear}
        />
      </Modal>
    </>
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
      <Modal.Section>
        {fetching && <CenteredSpinner />}
        {!fetching &&
          (hasRun ? (
            <Banner title={actionResultMessage} tone={hasError ? "critical" : "success"} />
          ) : (
            <RunActionConfirmationText count={ids.length} />
          ))}
      </Modal.Section>
      <Modal.Section>
        <div style={{ float: "right", paddingBottom: "16px" }}>
          <ButtonGroup>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            {((!hasError && !hasRun) || fetching) && (
              <Button variant="primary" onClick={runAction} loading={fetching}>
                Run
              </Button>
            )}
          </ButtonGroup>
        </div>
      </Modal.Section>
    </>
  );
};

const CenteredSpinner = () => (
  <div style={{ textAlign: "center", width: "100%" }}>
    <Spinner accessibilityLabel="Spinner example" size="large" />
  </div>
);

const RunActionConfirmationText = (props: { count: number }) => {
  const { count } = props;
  return useMemo(() => <Text as="p">{getRunActionConfirmationText(count)}</Text>, [count]);
};
