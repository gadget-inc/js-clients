import { Button, ButtonGroup, Modal, Popover, Spinner, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import type { TableRow } from "../../use-table/types.js";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
import type { ModelActionDetails } from "../hooks/useTableBulkActions.js";

export const PolarisAutoBulkActionModal = (props: {
  model: any;
  modelActionDetails?: ModelActionDetails;
  ids: string[];
  selectedRows: TableRow[];
  clearSelection: () => void;
}) => {
  const [toastMessage, setToastMessage] = React.useState<string | undefined>(undefined);

  return (
    <>
      {false && toastMessage && (
        <>
          <Popover
            active={true}
            activator={<div style={{ position: "absolute", top: "90%", left: "100px" }}></div>}
            onClose={() => setToastMessage(undefined)}
            preferredPosition="above"
          >
            Hello 1234
          </Popover>
        </>
      )}
      <BulkActionModal {...props} setToastMessage={setToastMessage} />
    </>
  );
};

const BulkActionModal = (props: {
  model: any;
  modelActionDetails?: ModelActionDetails;
  ids: string[];
  selectedRows: TableRow[];
  clearSelection: () => void;
  setToastMessage: (message: string) => void;
}) => {
  const { model, modelActionDetails, ids, selectedRows, clearSelection, setToastMessage } = props;

  const [showModal, setShowModal] = React.useState(!!modelActionDetails);
  const [actionName, setActionName] = React.useState(modelActionDetails?.apiIdentifier);

  useEffect(() => {
    if (!modelActionDetails) {
      return;
    }
    setShowModal(true);
    setActionName(modelActionDetails.apiIdentifier);
  }, [modelActionDetails]);

  const actionIsLoaded = modelActionDetails && actionName;
  const isBulkGadgetAction = actionIsLoaded && model[actionName] && modelActionDetails.isGadgetAction && modelActionDetails.isBulk;

  const modalTitle = useMemo(() => humanizeCamelCase(actionName ?? ""), [actionName]);

  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);

  if (!actionIsLoaded || !isBulkGadgetAction) {
    return null;
  }

  return (
    <>
      <Modal onClose={() => setShowModal(false)} title={modalTitle} open={showModal}>
        <GadgetBulkActionModalContent
          model={model}
          modelActionDetails={modelActionDetails}
          actionLabel={modalTitle.replace("Bulk ", "")}
          ids={ids}
          close={closeModal}
          clearSelection={clearSelection}
          setToastMessage={setToastMessage}
        />
      </Modal>
    </>
  );
};

/**
 * Modal content for executing Gadget bulk actions
 */
const GadgetBulkActionModalContent = (props: {
  model: any;
  modelActionDetails: ModelActionDetails;
  actionLabel: string;
  ids: string[];
  close: () => void;
  clearSelection: () => void;
  setToastMessage: (message: string) => void;
}) => {
  const { model, modelActionDetails, actionLabel: actionName, ids, close, clearSelection, setToastMessage } = props;

  const [hasRun, setHasRun] = React.useState(false);

  // eslint-disable-next-line
  // @ts-ignore:next-line
  const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});

  const hasError = !!(error || (data && (data as any).success === false));

  const runAction = useCallback(() => {
    void runBulkAction(ids);
    setHasRun(true);
  }, [runBulkAction, ids, clearSelection, close]);

  // Automatically close the modal if the action is successful
  useEffect(() => {
    if (!fetching && hasRun) {
      clearSelection();
      close();
      setToastMessage(hasError ? `${actionName}${ActionErrorMessage}` : `${actionName}${ActionSuccessMessage}`);
    }
  }, [fetching, hasRun, hasError, clearSelection, close, setToastMessage, actionName]);

  return (
    <>
      <Modal.Section>
        {fetching && <CenteredSpinner />}
        {!fetching && !hasRun && <RunActionConfirmationText count={ids.length} />}
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
  <div style={{ textAlign: "center" }}>
    <Spinner accessibilityLabel="Spinner example" size="large" />
  </div>
);

export const ActionSuccessMessage = ` completed`;
export const ActionErrorMessage = ` failed`;

const RunActionConfirmationText = (props: { count: number }) => {
  const { count } = props;
  return useMemo(
    () => <Text as="p">{`Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`}</Text>,
    [count]
  );
};
