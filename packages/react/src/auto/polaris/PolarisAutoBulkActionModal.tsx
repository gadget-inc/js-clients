import { Banner, Button, ButtonGroup, Modal, Spinner, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo } from "react";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
import { ModelActionDetails } from "../hooks/useTableBulkActions.js";

export const PolarisAutoBulkActionModal = (props: { model: any; modelActionDetails?: ModelActionDetails; ids: string[] }) => {
  const { model, modelActionDetails, ids } = props;

  const [showModal, setShowModal] = React.useState(!!modelActionDetails);
  const [actionName, setActionName] = React.useState(modelActionDetails?.apiIdentifier);

  useEffect(() => {
    if (!modelActionDetails) {
      return;
    }
    setShowModal(true);
    setActionName(modelActionDetails.apiIdentifier);
  }, [modelActionDetails]);

  const actionIsLoaded = modelActionDetails && actionName && model[actionName];
  const isBulkAction = actionIsLoaded && modelActionDetails.isBulk;

  const modalTitle = useMemo(() => humanizeCamelCase(actionName ?? ""), [actionName]);

  if (!actionIsLoaded) {
    return null;
  }

  return (
    <>
      <Modal onClose={() => setShowModal(false)} title={modalTitle} open={showModal}>
        {isBulkAction ? (
          <BulkActionModalContent model={model} modelActionDetails={modelActionDetails} ids={ids} close={() => setShowModal(false)} />
        ) : null}
      </Modal>
    </>
  );
};

/**
 * Modal content for executing bulk actions
 */
const BulkActionModalContent = (props: { model: any; modelActionDetails: ModelActionDetails; ids: string[]; close: () => void }) => {
  const { model, modelActionDetails, ids, close } = props;

  const [hasRun, setHasRun] = React.useState(false);

  // eslint-disable-next-line
  // @ts-ignore:next-line
  const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});

  const hasError = !!(error || (data && (data as any).success === false));
  const errorMessage = error
    ? error.message
    : data && (data as any)?.success === false
    ? (data as any)?.errors?.map((e: { message: string }) => e.message).join(", ")
    : "";

  const initialMessage = useMemo(
    () => <Text as="p">{`Are you sure you want to run this action on ${ids.length} record${ids.length === 1 ? "" : `s`}?`}</Text>,
    [ids.length]
  );

  const actionResultBanner = useMemo(
    () => (hasError ? <Banner title={errorMessage} tone="critical" /> : <Banner title={ActionSuccessMessage} tone="success" />),
    [hasError, errorMessage]
  );

  const runAction = useCallback(() => {
    void runBulkAction(ids);
    setHasRun(true);
  }, [runBulkAction, ids]);

  return (
    <>
      <Modal.Section>
        {fetching && <CenteredSpinner />}
        {!fetching && (hasRun ? actionResultBanner : initialMessage)}
      </Modal.Section>
      <Modal.Section>
        <div style={{ float: "right", paddingBottom: "16px" }}>
          <ButtonGroup>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button disabled={hasError || hasRun} variant="primary" onClick={runAction} loading={fetching}>
              Run
            </Button>
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
const ActionSuccessMessage = `Action completed successfully`;
