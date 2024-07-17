import { Provider } from '../../src/GadgetProvider.tsx';
import { PolarisAutoTable } from '../../src/auto/polaris/PolarisAutoTable.tsx';
import { AppProvider, LegacyCard } from '@shopify/polaris';
import { testApi as api } from '../apis.ts';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Polaris/AutoTable',
  component: PolarisAutoTable,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider>
              <LegacyCard>
                <div style={{maxHeight: '70vh', overflow: 'auto'}}>
                  <Story /> 
                </div>
              </LegacyCard>
          </AppProvider>
        </Provider>
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
    model: api.gizmo
  },
};
