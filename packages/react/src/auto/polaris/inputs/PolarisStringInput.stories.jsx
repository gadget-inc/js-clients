import { fn } from '@storybook/test';
import { PolarisStringInput } from './PolarisStringInput.tsx';
import { AppProvider } from '@shopify/polaris';
import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Polaris/StringInput',
  component: PolarisStringInput,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading the theme value from parameters
      const { theme = 'light' } = parameters;
      return (
        <AppProvider>
          <FormProvider {...useForm()}>
            <Story />
          </FormProvider>
        </AppProvider>
      );
    },
  ],
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    path: "foo.name",
    field: {
      name: "Name",
      requiredArgumentForInput: true,
    }
  },
};
