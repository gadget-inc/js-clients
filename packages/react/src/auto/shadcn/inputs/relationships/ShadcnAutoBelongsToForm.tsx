import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";

export const makeShadcnAutoBelongsToForm = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandInput"
  | "Label"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
  | "Checkbox"
  | "DropdownMenu"
  | "DropdownMenuContent"
  | "DropdownMenuItem"
  | "DropdownMenuTrigger"
  | "Dialog"
  | "DialogContent"
  | "DialogHeader"
  | "DialogTitle"
  | "DialogFooter"
  | "DialogClose"
>) => {
  const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });

  const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
    Command,
    CommandItem,
    CommandInput,
    Label,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
  });

  function ShadcnAutoBelongsToForm(props: AutoRelationshipFormProps) {
    const { field, label } = props;
    const form = useBelongsToForm(props);
    const {
      record,
      actionsOpen,
      setActionsOpen,
      isEditing,
      setIsEditing,
      pathPrefix,
      hasRecord,
      recordOption,
      relatedModelName,
      path,
      setValue,
      getValues,
      metaDataPathPrefix,
    } = form;

    return (
      <div>
        <div>
          <div className="flex flex-row justify-between items-center mb-2">
            {label ?? <h2 className="text-lg font-medium h-9">{relatedModelName}</h2>}
            {hasRecord && (
              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger
                  data-testid={`${path}-dropdown-menu-trigger`}
                  className="focus-visible:outline-hidden focus-visible:ring-0"
                >
                  <Button variant="ghost" className="w-4" onClick={() => setActionsOpen(!actionsOpen)}>
                    <EllipsisVerticalIcon className="w-4 h-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background">
                  <DropdownMenuItem
                    value="edit"
                    onSelect={() => {
                      setIsEditing(true);
                      setActionsOpen(false);
                    }}
                  >
                    Edit {relatedModelName.toLocaleLowerCase()}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    value="remove"
                    onSelect={() => {
                      const { __typename, id: recordId, ...rest } = record;
                      const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                      setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                    }}
                    variant="destructive"
                  >
                    Remove {relatedModelName.toLocaleLowerCase()}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          {hasRecord ? (
            <div className="flex flex-row justify-between border-t">
              <div className="flex flex-col gap-2 pt-3">
                {renderOptionLabel(recordOption!.primary, "primary")}
                {recordOption!.secondary && renderOptionLabel(recordOption!.secondary, "secondary")}
              </div>
              <div className="mt-2">{recordOption!.tertiary && renderOptionLabel(recordOption!.tertiary, "tertiary")}</div>
            </div>
          ) : (
            <SearchableSingleRelatedModelRecordSelector form={form} field={field} />
          )}
        </div>

        <Dialog open={isEditing} onOpenChange={() => setIsEditing(!isEditing)}>
          <RelationshipContext.Provider
            value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
          >
            <DialogContent className="bg-background">
              <DialogHeader>
                <DialogTitle>Add {relatedModelName}</DialogTitle>
              </DialogHeader>
              <div>{props.children}</div>
              <DialogFooter className="">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button
                  type="button"
                  variant="default"
                  onClick={() => {
                    const { _unlink, _link, ...rest } = getValues(path);
                    setValue(path, rest);
                    setIsEditing(false);
                  }}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </RelationshipContext.Provider>
        </Dialog>
      </div>
    );
  }

  return autoRelationshipForm(ShadcnAutoBelongsToForm);
};
