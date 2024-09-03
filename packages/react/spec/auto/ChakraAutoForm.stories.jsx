import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../src/GadgetProvider.tsx";
import ChakraAutoForm from "../../src/auto/chakra/ChakraAutoForm.tsx";
import { testApi as api } from "../apis.ts";
import { StorybookErrorBoundary } from "./StorybookErrorBoundary.tsx";

export default {
  title: "Chakra/AutoCheckbox",
  component: ChakraAutoForm,
  decorators: [
    (Story) => {
      return (
        <Provider api={api}>
          <ChakraProvider>
            <FormProvider {...useForm()}>
              <StorybookErrorBoundary>
                <Story />
              </StorybookErrorBoundary>
            </FormProvider>
          </ChakraProvider>
        </Provider>
      );
    },
  ],
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    action: api.widget.create,
    include: ["name", "isChecked", "inventoryCount", "deleteme"],
  },
};
