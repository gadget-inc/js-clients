import { BlockStack, Box, Button, FormLayout, InlineStack, Text } from "@shopify/polaris";
import React, { useState } from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { AutoHasManyThroughJoinModelForm } from "../../../../src/auto/hooks/useHasManyThroughController.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../../apis.js";
import {
  AutoBelongsToForm,
  AutoHasManyForm,
  AutoHasManyThroughForm,
  AutoHasOneForm,
  AutoInput,
  AutoSubmit,
  Card,
  SelectableDesignSystemAutoFormStory,
  SubmitResultBanner,
} from "./SelectableDesignSystemAutoFormStory.js";

const ExampleWidgetAutoRelatedForm = (props: any) => {
  return (
    <>
      <SelectableDesignSystemAutoFormStory {...props}>
        <SubmitResultBanner />

        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Widget
          </Text>
          <AutoInput field="name" />
          <AutoInput field="description" />
          <AutoInput field="inventoryCount" />
        </Card>

        <Card>
          <AutoBelongsToForm
            field="section"
            recordLabel={{
              primary: "name",
              secondary: "label",
              tertiary: "id",
            }}
          >
            <AutoInput field="name" />
          </AutoBelongsToForm>
        </Card>

        <Card>
          <AutoHasOneForm
            field="doodad"
            recordLabel={{
              primary: "name",
              secondary: ({ record }: { record: any }) => `${record.weight} (${record.active})`,
              tertiary: "size",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <AutoInput field="name" />
              <AutoInput field="weight" />
              <AutoInput field="active" />
              <AutoInput field="size" />
            </div>
          </AutoHasOneForm>
        </Card>

        <Card>
          <AutoHasManyForm
            label={<p>{`Has Many Form -- Gizmos`}</p>}
            field="gizmos"
            recordLabel={{
              primary: "name",
              secondary: "orientation",
              tertiary: ({ record }: { record: any }) => <p>{record.name}</p>,
            }}
          >
            <AutoInput field="name" />
            <AutoInput field="orientation" />
            <AutoInput field="attachment" />
            <AutoHasManyForm
              field="doodads"
              recordLabel={{
                primary: "name",
                secondary: "weight",
              }}
            >
              <AutoInput field="name" />
              <AutoInput field="weight" />
            </AutoHasManyForm>
          </AutoHasManyForm>
        </Card>
        <AutoSubmit />
      </SelectableDesignSystemAutoFormStory>
    </>
  );
};

export default {
  title: "AutoForm/AutoRelationshipForm",
  component: SelectableDesignSystemAutoFormStory,
  decorators: [
    (Story: any) => {
      return (
        <Provider api={api}>
          <Story />
        </Provider>
      );
    },
  ],
};

export const Create: any = {
  render: (args: any) => <ExampleWidgetAutoRelatedForm {...args} />,
  args: {
    action: api.widget.create,
    debug: true,
  },
};

export const Update: any = {
  render: (args: any) => <ExampleWidgetAutoRelatedForm {...args} />,
  args: {
    action: api.widget.update,
    findBy: "1",
  },
};

export const CreateWithLargeHasMany: any = {
  render: (args: any) => <ExampleSectionAutoRelatedForm {...args} />,
  args: {
    action: api.section.create,
  },
};

const ExampleSectionAutoRelatedForm = (props: any) => {
  return (
    <>
      <SelectableDesignSystemAutoFormStory {...props}>
        <SubmitResultBanner />
        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Section
          </Text>
          <AutoInput field="name" />
          <AutoInput field="label" />
        </Card>

        <Card>
          <Text as="h2" variant="headingSm">
            Has Many Form -- Widgets
          </Text>
          <AutoHasManyForm field="widgets" label="Widgets">
            <AutoInput field="name" />
            <AutoInput field="inventoryCount" />
          </AutoHasManyForm>
        </Card>
        <AutoSubmit />
      </SelectableDesignSystemAutoFormStory>
    </>
  );
};

export const CreateWithHasManyThrough: any = {
  render: (args: any) => <ExampleCourseCreateRelatedForm {...args} />,
  args: {
    action: api.university.course.create,
    debug: true,
  },
};

export const UpdateWithHasManyThrough: any = {
  render: (args: any) => <ExampleCourseCreateRelatedForm {...args} />,
  args: {
    action: api.university.course.update,
    findBy: "3",
  },
};

const ExampleCourseCreateRelatedForm = (props: any) => {
  return (
    <>
      <SelectableDesignSystemAutoFormStory {...props}>
        <SubmitResultBanner />
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingSm">
              Top Level Form -- Course
            </Text>
            <FormLayout>
              <AutoInput field="title" />
              <AutoInput field="description" />
            </FormLayout>
          </BlockStack>
        </Card>

        <Card>
          <AutoHasManyThroughForm
            field="students"
            recordLabel={{
              primary: ["firstName", "lastName"],
              secondary: ({ record }: { record: any }) => {
                if (record.year <= 1) {
                  return "Freshman";
                } else if (record.year <= 2) {
                  return "Sophomore";
                } else if (record.year <= 3) {
                  return "Junior";
                } else if (record.year <= 4) {
                  return "Senior";
                } else {
                  return `Mature (${record.year})`;
                }
              },
              tertiary: "department",
            }}
          >
            <InlineStack gap="300">
              {/* Fields on the join model. The prefix is the model API id of the join model */}

              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="effectiveTo" />
                <AutoInput field="effectiveFrom" />
              </AutoHasManyThroughJoinModelForm>

              {/* Fields on the sibling model. No prefix */}
              <AutoInput field="firstName" />
              <AutoInput field="lastName" />
            </InlineStack>
          </AutoHasManyThroughForm>
        </Card>

        <Card>
          <AutoHasManyThroughForm
            field="professors"
            recordLabel={{
              primary: ["title", "firstName", "lastName"],
              secondary: "weight",
            }}
          />
        </Card>
        <AutoSubmit />
      </SelectableDesignSystemAutoFormStory>
    </>
  );
};

export const CreateWithHasManyThroughSelfReferential: any = {
  render: (args: any) => <ExampleTweeterFollowerCreateRelatedForm {...args} />,
  args: {
    action: api.tweeter.create,
  },
};

export const UpdateWithHasManyThroughSelfReferential: any = {
  render: (args: any) => <ExampleTweeterFollowerCreateRelatedForm {...args} />,
  args: {
    action: api.tweeter.update,
    findBy: "1",
    debug: true,
  },
};
const ExampleTweeterFollowerCreateRelatedForm = (props: any) => {
  return (
    <>
      <SelectableDesignSystemAutoFormStory {...props}>
        <SubmitResultBanner />
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingSm">
              Top Level Form -- Tweeter
            </Text>
            <FormLayout>
              <AutoInput field="name" />
            </FormLayout>
          </BlockStack>
        </Card>

        <Card>
          <AutoHasManyThroughForm
            field="followers"
            recordLabel={{
              primary: "name",
            }}
          >
            <InlineStack>
              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="started" />
                <AutoInput field="ended" />
              </AutoHasManyThroughJoinModelForm>
            </InlineStack>
          </AutoHasManyThroughForm>
        </Card>

        <Card>
          <AutoHasManyThroughForm
            field="followees"
            recordLabel={{
              primary: "name",
            }}
          >
            <InlineStack>
              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="started" />
                <AutoInput field="ended" />
              </AutoHasManyThroughJoinModelForm>
            </InlineStack>
          </AutoHasManyThroughForm>
        </Card>
        <AutoSubmit />
      </SelectableDesignSystemAutoFormStory>
    </>
  );
};

export const DeepRelationshipChain: any = {
  render: (args: any) => {
    return (
      <>
        <>
          <SelectableDesignSystemAutoFormStory {...args}>
            <SubmitResultBanner />

            <Card>
              <AutoInput field="englishName" />
              <AutoInput field="size" />

              {/* Root hasMany */}
              <AutoHasManyForm field="continents">
                <AutoInput field="englishName" />

                {/* level 1 hasMany */}
                <AutoHasManyForm field="countries">
                  <AutoInput field="englishName" />

                  {/* level 2 hasMany */}
                  <AutoHasManyForm
                    field="cities"
                    recordLabel={{
                      primary: ({ record }: { record: any }) => `${record.englishName} ${record.localName ? `(${record.localName})` : ""}`,
                    }}
                  >
                    <AutoInput field="englishName" />
                    <AutoInput field="localName" />

                    {/* level 3 hasMany || hasOne */}
                    <MayorOrCitizenSelect />
                  </AutoHasManyForm>
                </AutoHasManyForm>
              </AutoHasManyForm>
            </Card>
            <PolarisAutoSubmit />
          </SelectableDesignSystemAutoFormStory>
        </>
      </>
    );
  },
  args: {
    action: api.deepRelationshipChain.planet.update,
    findBy: "1",

    // For advanced cases like this with deeply nested conditional appearing forms, a manual select is required to prevent unmounts as conditionally appearing inputs get registered in the form state
    // `id` fields must be selected at every step of the relationship field chain because they control if a nested action will become an update or a create.
    // If there is no ID, only creates nested actions will be used to create new nested records instead of updating existing ones.
    select: {
      englishName: true,
      size: true,
      continents: {
        edges: {
          node: {
            englishName: true,
            countries: {
              edges: {
                node: {
                  englishName: true,
                  cities: {
                    edges: {
                      node: {
                        englishName: true,
                        localName: true,
                        citizens: {
                          edges: {
                            node: {
                              firstName: true,
                              lastName: true,
                              cityOfMayorDuty: { englishName: true, localName: true },
                            },
                          },
                        },
                        mayor: { firstName: true, lastName: true },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const MayorOrCitizenSelect = () => {
  const [showMayor, setShowMayor] = useState(!false);

  return (
    <>
      <Box>
        <p>Showing {showMayor ? "Mayor" : "Citizens"}</p>
        <Button onClick={() => setShowMayor(!showMayor)}>Toggle</Button>
      </Box>
      {showMayor ? (
        <Card>
          <AutoHasOneForm field="mayor" recordLabel={{ primary: ["firstName", "lastName"] }}>
            <AutoInput field="firstName" />
            <AutoInput field="lastName" />
          </AutoHasOneForm>
        </Card>
      ) : (
        <Card>
          <AutoHasManyForm field="citizens" recordLabel={{ primary: ["firstName", "lastName"] }}>
            <AutoInput field="firstName" />
            <AutoInput field="lastName" />

            <AutoBelongsToForm field="cityOfMayorDuty" recordLabel={{ primary: ["englishName", "localName"] }}>
              <AutoInput field="englishName" />
              <AutoInput field="localName" />
            </AutoBelongsToForm>
          </AutoHasManyForm>
        </Card>
      )}
    </>
  );
};
