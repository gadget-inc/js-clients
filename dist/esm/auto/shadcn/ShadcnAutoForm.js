import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm = ({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox, Badge, Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, Calendar, Popover, PopoverTrigger, PopoverContent, ScrollArea, ScrollBar, Textarea, }) => {
    const ShadcnAutoInput = makeShadcnAutoInput({
        Input,
        Label,
        Button,
        Checkbox,
        Badge,
        Command,
        CommandInput,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Calendar,
        Popover,
        PopoverTrigger,
        PopoverContent,
        ScrollArea,
        ScrollBar,
        Textarea,
    });
    const ShadcnAutoSubmit = makeShadcnAutoSubmit({ Button });
    const { ShadcnSubmitSuccessfulBanner, ShadcnSubmitErrorBanner } = makeSubmitResultBanner({
        Alert,
        AlertTitle,
        AlertDescription,
        Button,
    });
    return (props) => {
        const { action, findBy } = props;
        validateAutoFormProps(props);
        // Component key to force re-render when the action or findBy changes
        const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
        return (React.createElement(AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: React.Children.count(props.children) > 0 },
            React.createElement(ShadcnAutoFormComponent, { key: componentKey, ...props, elements: { Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, ShadcnAutoInput, ShadcnAutoSubmit } })));
    };
    function ShadcnAutoFormComponent(props) {
        const { record: _record, action, findBy, ...rest } = props;
        const { Form, Skeleton, ShadcnAutoInput, ShadcnAutoSubmit } = props.elements;
        const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, isLoading, } = useAutoForm(props);
        const formTitle = props.title === undefined ? humanizeCamelCase(action.operationName) : props.title;
        if (props.successContent && isSubmitSuccessful) {
            return props.successContent;
        }
        if (fetchingMetadata) {
            return (React.createElement(Form, { ...rest, onSubmit: submit },
                React.createElement(Skeleton, null)));
        }
        const autoFormMetadataContext = {
            findBy,
            submit,
            metadata,
            submitResult: {
                isSuccessful: isSubmitSuccessful,
                error: formError ?? metadataError,
                isSubmitting,
            },
            model: {
                apiIdentifier: action.modelApiIdentifier,
                namespace: action.namespace,
            },
            fields,
        };
        const formContent = props.children ?? (React.createElement(React.Fragment, null,
            formTitle && React.createElement("h2", { className: "text-2xl font-bold" }, formTitle),
            !props.onSuccess && React.createElement(ShadcnSubmitSuccessfulBanner, null),
            !props.onFailure && React.createElement(ShadcnSubmitErrorBanner, null),
            !metadataError && (React.createElement(React.Fragment, null,
                fields.map(({ metadata }) => (React.createElement(ShadcnAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
                React.createElement(ShadcnAutoSubmit, null, props.submitLabel ?? "Submit")))));
        return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
            React.createElement(FormProvider, { ...originalFormMethods },
                isLoading && React.createElement(Skeleton, null),
                React.createElement("div", { hidden: isLoading },
                    React.createElement(Form, { ...rest, onSubmit: submit }, formContent)))));
    }
};
//# sourceMappingURL=ShadcnAutoForm.js.map