import React, { useMemo } from "react";
import {
  getRunActionConfirmationText,
  useAutoTableBulkActionModal,
  useGadgetBulkActionModalContent,
  type AutoBulkActionModal,
  type GadgetBulkActionModalContentProps,
} from "../../hooks/useTableBulkActions.js";
import { type ShadcnElements } from "../elements.js";
import { makeShadcnAutoLoadingIndicator } from "./ShadcnAutoLoadingIndicator.js";

export const makeShadcnAutoTableBulkActionModal = (elements: ShadcnElements) => {
  const { Label, Button, Alert, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } = elements;

  const LoadingIndicator = makeShadcnAutoLoadingIndicator(elements);

  function ShadcnAutoTableBulkActionModal(props: AutoBulkActionModal) {
    const { model, modelActionDetails, ids } = props;
    const { actionIsLoaded, closeAndClear, isBulkGadgetAction, modalTitle, showModal } = useAutoTableBulkActionModal(props);

    if (!actionIsLoaded || !isBulkGadgetAction || !modelActionDetails) {
      return null;
    }

    return (
      <>
        <Dialog
          open={showModal}
          onOpenChange={(open) => {
            if (!open) {
              closeAndClear();
            }
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{modalTitle}</DialogTitle>
            </DialogHeader>
            <GadgetBulkActionModalContent
              model={model}
              modelActionDetails={modelActionDetails}
              actionLabel={modalTitle}
              ids={ids}
              close={closeAndClear}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  function GadgetBulkActionModalContent(props: GadgetBulkActionModalContentProps) {
    const { ids, close } = props;

    const { hasRun, actionResultMessage, fetching, hasError, runAction } = useGadgetBulkActionModalContent(props);

    return (
      <>
        <DialogDescription>
          {fetching && <LoadingIndicator />}
          {!fetching &&
            (hasRun ? (
              <Alert variant={hasError ? "destructive" : "default"}>{actionResultMessage}</Alert>
            ) : (
              <RunActionConfirmationText count={ids.length} />
            ))}
        </DialogDescription>
        <DialogDescription>
          <Button onClick={close}>Close</Button>
          {((!hasError && !hasRun) || fetching) && (
            <Button onClick={runAction} disabled={fetching}>
              Run
            </Button>
          )}
        </DialogDescription>
      </>
    );
  }

  function RunActionConfirmationText(props: { count: number }) {
    const { count } = props;
    return useMemo(() => <Label>{getRunActionConfirmationText(count)}</Label>, [count]);
  }

  return ShadcnAutoTableBulkActionModal;
};
