import { AppProvider, BlockStack, Box, Button, Card, FormLayout, InlineStack, Page, Text } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React, { useState } from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.tsx";
import { PolarisAutoBelongsToForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoBelongsToForm.tsx";
import { PolarisAutoHasManyForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyForm.tsx";
import { PolarisAutoHasManyThroughForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughForm.tsx";
import { PolarisAutoHasOneForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasOneForm.tsx";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.tsx";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { testApi as api } from "../../../apis.ts";

const ExampleWidgetAutoRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <PolarisSubmitResultBanner />
        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Widget
          </Text>
          <PolarisAutoInput field="name" />
          <PolarisAutoInput field="description" />
          <PolarisAutoInput field="inventoryCount" />
        </Card>

        <Card>
          <PolarisAutoBelongsToForm field="section" primaryLabel="name" secondaryLabel="name" tertiaryLabel="id">
            <PolarisAutoInput field="name" />
          </PolarisAutoBelongsToForm>
        </Card>

        <Card>
          <PolarisAutoHasOneForm
            field="doodad"
            primaryLabel="name"
            secondaryLabel={(record) => `${record.weight} (${record.active})`}
            tertiaryLabel="size"
          >
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="weight" />
            <PolarisAutoInput field="active" />
            <PolarisAutoInput field="size" />
          </PolarisAutoHasOneForm>
        </Card>

        <Card>
          <PolarisAutoHasManyForm
            label={<Text as="h2" variant="headingSm">{`Has Many Form -- Gizmos`}</Text>}
            field="gizmos"
            selectPaths={["name", "orientation"]}
            primaryLabel="name"
            secondaryLabel="orientation"
            tertiaryLabel={(record) => <Text>{record.id}</Text>}
          >
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="orientation" />
            <PolarisAutoInput field="attachment" />
            <PolarisAutoHasManyForm field="doodads" selectPaths={["name", "weight"]} primaryLabel="name" secondaryLabel="weight">
              <PolarisAutoInput field="name" />
              <PolarisAutoInput field="weight" />
            </PolarisAutoHasManyForm>
          </PolarisAutoHasManyForm>
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

export default {
  title: "Polaris/AutoForm/AutoRelationshipForm",
  component: ExampleWidgetAutoRelatedForm,
  decorators: [
    (Story) => {
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <Story />
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],
};

export const Create = {
  args: {
    action: api.widget.create,
    debug: true,
  },
};

export const Update = {
  args: {
    action: api.widget.update,
    findBy: "1",
  },
};

export const CreateWithLargeHasMany = {
  render: (args) => <ExampleSectionAutoRelatedForm {...args} />,
  args: {
    action: api.section.create,
  },
};

const ExampleSectionAutoRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <PolarisSubmitResultBanner />
        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Section
          </Text>
          <PolarisAutoInput field="name" />
          <PolarisAutoInput field="label" />
        </Card>

        <Card>
          <Text as="h2" variant="headingSm">
            Has Many Form -- Widgets
          </Text>
          <PolarisAutoHasManyForm field="widgets" label="Widgets">
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
          </PolarisAutoHasManyForm>
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

export const CreateWithHasManyThrough = {
  render: (args) => <ExampleCourseCreateRelatedForm {...args} />,
  args: {
    action: api.university.course.create,
    debug: true,
  },
};

export const UpdateWithHasManyThrough = {
  render: (args) => <ExampleCourseCreateRelatedForm {...args} />,
  args: {
    action: api.university.course.update,
    findBy: "3",
  },
};

const ExampleCourseCreateRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <PolarisSubmitResultBanner />
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingSm">
              Top Level Form -- Course
            </Text>
            <FormLayout>
              <PolarisAutoInput field="title" />
              <PolarisAutoInput field="description" />
            </FormLayout>
          </BlockStack>
        </Card>

        <Card>
          <PolarisAutoHasManyThroughForm
            field="students"
            selectPaths={["firstName", "lastName", "year", "department"]}
            primaryLabel={["firstName", "lastName"]}
            secondaryLabel={(record) => {
              if (record.year <= 1) {
                return "Freshman";
              } else if (record.year <= 2) {
                return "Sophomore";
              } else if (record.year <= 3) {
                return "Junior";
              } else if (record.year <= 4) {
                return "Senior";
              } else {
                return "Mature";
              }
            }}
            tertiaryLabel="department"
          >
            <InlineStack>
              <PolarisAutoInput field="registration.effectiveFrom" />
              <PolarisAutoInput field="registration.effectiveTo" />
              <PolarisAutoInput field="registration.student.firstName" />
            </InlineStack>
          </PolarisAutoHasManyThroughForm>
        </Card>

        <Card>
          <PolarisAutoHasManyThroughForm
            field="professors"
            selectPaths={["title", "firstName", "lastName"]}
            primaryLabel={["title", "firstName", "lastName"]}
          />
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

export const CreateWithHasManyThroughSelfReferential = {
  render: (args) => <ExampleTweeterFollowerCreateRelatedForm {...args} />,
  args: {
    action: api.tweeter.create,
  },
};

export const UpdateWithHasManyThroughSelfReferential = {
  render: (args) => <ExampleTweeterFollowerCreateRelatedForm {...args} />,
  args: {
    action: api.tweeter.update,
    findBy: "1",
    debug: true,
  },
};
const ExampleTweeterFollowerCreateRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <PolarisSubmitResultBanner />
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingSm">
              Top Level Form -- Tweeter
            </Text>
            <FormLayout>
              <PolarisAutoInput field="name" />
            </FormLayout>
          </BlockStack>
        </Card>

        <Card>
          <PolarisAutoHasManyThroughForm field="followers" selectPaths={["name"]} primaryLabel={"name"}>
            <InlineStack>
              <PolarisAutoInput field="friendship.started" />
              <PolarisAutoInput field="friendship.ended" />
            </InlineStack>
          </PolarisAutoHasManyThroughForm>
        </Card>

        <Card>
          <PolarisAutoHasManyThroughForm field="followees" selectPaths={["name"]} primaryLabel={"name"}>
            <InlineStack>
              <PolarisAutoInput field="friendship.started" />
              <PolarisAutoInput field="friendship.ended" />
            </InlineStack>
          </PolarisAutoHasManyThroughForm>
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

export const DeepRelationshipChain = {
  render: (args) => {
    return (
      <>
        <Page>
          <PolarisAutoForm {...args}>
            <PolarisSubmitResultBanner />

            <Card>
              <PolarisAutoInput field="englishName" />
              <PolarisAutoInput field="size" />

              {/* Root hasMany */}
              <PolarisAutoHasManyForm field="continents">
                <PolarisAutoInput field="englishName" />

                {/* level 1 hasMany */}
                <PolarisAutoHasManyForm field="countries">
                  <PolarisAutoInput field="englishName" />

                  {/* level 2 hasMany */}
                  <PolarisAutoHasManyForm field="cities">
                    <PolarisAutoInput field="englishName" />
                    <PolarisAutoInput field="localName" />

                    {/* level 3 hasMany || hasOne */}
                    <MayorOrCitizenSelect />
                  </PolarisAutoHasManyForm>
                </PolarisAutoHasManyForm>
              </PolarisAutoHasManyForm>
            </Card>
            <PolarisAutoSubmit />
          </PolarisAutoForm>
        </Page>
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
      id: true,
      englishName: true,
      size: true,
      continents: {
        edges: {
          node: {
            id: true,
            englishName: true,
            countries: {
              edges: {
                node: {
                  id: true,
                  englishName: true,
                  cities: {
                    edges: {
                      node: {
                        id: true,
                        englishName: true,
                        localName: true,
                        citizens: {
                          edges: {
                            node: {
                              id: true,
                              firstName: true,
                              lastName: true,
                              cityOfMayorDuty: { id: true, englishName: true, localName: true },
                            },
                          },
                        },
                        mayor: { id: true, firstName: true, lastName: true },
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
        <Text>Showing {showMayor ? "Mayor" : "Citizens"}</Text>
        <Button onClick={() => setShowMayor(!showMayor)}>Toggle</Button>
      </Box>
      {showMayor ? (
        <Card>
          <PolarisAutoHasOneForm field="mayor" primaryLabel={["firstName", "lastName"]}>
            <PolarisAutoInput field="firstName" />
            <PolarisAutoInput field="lastName" />
          </PolarisAutoHasOneForm>
        </Card>
      ) : (
        <Card>
          <PolarisAutoHasManyForm field="citizens" primaryLabel={["firstName", "lastName"]}>
            <PolarisAutoInput field="firstName" />
            <PolarisAutoInput field="lastName" />

            <PolarisAutoBelongsToForm field="cityOfMayorDuty" primaryLabel={["englishName", "localName"]}>
              <PolarisAutoInput field="englishName" />
              <PolarisAutoInput field="localName" />
            </PolarisAutoBelongsToForm>
          </PolarisAutoHasManyForm>
        </Card>
      )}
    </>
  );
};
