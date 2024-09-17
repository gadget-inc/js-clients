import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
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
  const { model, modelActionDetails, ids, selectedRows, clearSelection } = props;

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

  const closeAndClear = useCallback(() => {
    setShowModal(false);
    clearSelection();
  }, [setShowModal, clearSelection]);

  if (!actionIsLoaded || !isBulkGadgetAction) {
    return null;
  }

  return (
    <>
      <Modal onClose={closeAndClear} title={modalTitle} open={showModal}>
        <GadgetBulkActionModalContent
          model={model}
          modelActionDetails={modelActionDetails}
          actionLabel={modalTitle.replace("Bulk ", "")}
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
const GadgetBulkActionModalContent = (props: {
  model: any;
  modelActionDetails: ModelActionDetails;
  actionLabel: string;
  ids: string[];
  close: () => void;
}) => {
  const { model, modelActionDetails, actionLabel: actionName, ids, close } = props;

  const [hasRun, setHasRun] = React.useState(false);

  // eslint-disable-next-line
  // @ts-ignore:next-line
  const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});

  const hasError = !!(error || (data && (data as any).success === false));

  const actionResultBanner = useMemo(
    () =>
      hasError ? (
        <Banner title={`${actionName}${ActionErrorMessage}`} tone="critical" />
      ) : (
        <Banner title={`${actionName}${ActionSuccessMessage}`} tone="success" />
      ),
    [hasError]
  );

  const runAction = useCallback(() => {
    void runBulkAction(ids);
    setHasRun(true);
  }, [runBulkAction, ids]);

  return (
    <>
      <Modal.Section>
        {fetching && <CenteredSpinner />}
        {!fetching && (hasRun ? actionResultBanner : <RunActionConfirmationText count={ids.length} />)}
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
