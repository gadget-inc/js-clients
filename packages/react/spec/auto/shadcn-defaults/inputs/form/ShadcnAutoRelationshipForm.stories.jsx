import React, { useState } from "react";
import { Provider } from "../../../../../src/GadgetProvider.tsx";
import { AutoHasManyThroughJoinModelForm } from "../../../../../src/auto/hooks/useHasManyThroughController.tsx";
import { makeAutocomponents } from "../../../../../src/auto/shadcn/unreleasedIndex.ts";
import { FormProvider, useForm } from "../../../../../src/useActionForm.ts";
import { testApi as api } from "../../../../apis.ts";
import { StorybookErrorBoundary } from "../../../storybook/StorybookErrorBoundary.tsx";
import { elements } from "../../index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const { AutoForm, AutoHasOneForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoBelongsToForm, AutoHasManyForm, AutoHasManyThroughForm } =
  makeAutocomponents(elements);
const { Card, Label, Button } = elements;

const Component = (props) => {
  return (
    <AutoForm {...props}>
      <div className="flex flex-col gap-8">
        <div className="bg-white p-4 rounded-md">
          <SubmitResultBanner />
        </div>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoBelongsToForm
            field="section"
            recordLabel={({ record }) => (
              <Label>
                {record.name} (id:{record.id})
              </Label>
            )}
          >
            <AutoInput field="name" />
          </AutoBelongsToForm>
        </Card>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasOneForm
            field="doodad"
            recordLabel={{
              primary: "name",
              secondary: ({ record }) => `${record.weight ?? "N/A"} (${record.active ?? "N/A"})`,
              tertiary: "size",
            }}
          >
            <div className="flex flex-col gap-4">
              <AutoInput field="name" />
              <AutoInput field="weight" />
              <AutoInput field="active" />
              <AutoInput field="size" />
            </div>
          </AutoHasOneForm>
        </Card>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasManyForm
            label={
              <Label as="h2" variant="headingSm">
                Has Many Form -- Gizmos
              </Label>
            }
            field="gizmos"
            recordLabel={{
              primary: "name",
              secondary: "orientation",
            }}
          >
            <div className="flex flex-col gap-4">
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
                <div className="flex flex-col gap-4">
                  <AutoInput field="name" />
                  <AutoInput field="weight" />
                </div>
              </AutoHasManyForm>
            </div>
          </AutoHasManyForm>
        </Card>

        <div className="mt-4">
          <AutoSubmit variant="default" className="w-full bg-white p-2 rounded-md" />
        </div>
      </div>
    </AutoForm>
  );
};

export default {
  title: "Shadcn/AutoRelationshipForm",
  component: Component,
  decorators: [
    (Story, { parameters }) => {
      const { theme = "light" } = parameters;
      return (
        <div style={{ width: "800px" }}>
          <Provider api={api}>
            <FormProvider {...useForm()}>
              <StorybookErrorBoundary>
                <Story />
              </StorybookErrorBoundary>
            </FormProvider>
          </Provider>
        </div>
      );
    },
  ],

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    <div className="flex flex-col gap-4">
      <AutoForm {...props}>
        <div className="bg-white p-4 rounded-md">
          <SubmitResultBanner />
        </div>
        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <div className="flex flex-col gap-4">
            <Label as="h2" variant="headingSm">
              Top Level Form -- Tweeter
            </Label>
            <div className="flex flex-col gap-4">
              <AutoInput field="name" />
            </div>
          </div>
        </Card>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasManyThroughForm
            field="followers"
            recordLabel={{
              primary: "name",
            }}
          >
            <div className="flex flex-row gap-4">
              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="started" />
                <AutoInput field="ended" />
              </AutoHasManyThroughJoinModelForm>
            </div>
          </AutoHasManyThroughForm>
        </Card>

        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasManyThroughForm
            field="followees"
            recordLabel={{
              primary: "name",
            }}
          >
            <div className="flex flex-row gap-4">
              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="started" />
                <AutoInput field="ended" />
              </AutoHasManyThroughJoinModelForm>
            </div>
          </AutoHasManyThroughForm>
        </Card>
        <div className="mt-4">
          <AutoSubmit variant="default" className="w-full bg-white p-2 rounded-md" />
        </div>
      </AutoForm>
    </div>
  );
};

const ExampleSectionAutoRelatedForm = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <AutoForm {...props}>
        <SubmitResultBanner />
        <Card>
          <Label>Top Level Form -- Section</Label>
          <AutoInput field="name" />
          <AutoInput field="label" />
        </Card>

        <Card>
          <Label>Has Many Form -- Widgets</Label>
          <AutoHasManyForm field="widgets" label="Widgets">
            <AutoInput field="name" />
            <AutoInput field="inventoryCount" />
          </AutoHasManyForm>
        </Card>
        <AutoSubmit />
      </AutoForm>
    </div>
  );
};

const ExampleCourseCreateRelatedForm = (props) => {
  return (
    <div className="flex flex-col gap-4  p-4 rounded-md">
      <AutoForm {...props}>
        <div className="bg-white p-4 rounded-md">
          <SubmitResultBanner />
        </div>
        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label>Top Level Form -- Course</Label>
          <AutoInput field="title" />
          <AutoInput field="description" />
        </Card>

        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label>Has Many Through Form -- Students</Label>
          <AutoHasManyThroughForm
            field="students"
            recordLabel={{
              primary: ["firstName", "lastName"],
              secondary: ({ record }) => {
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
            <div className="flex flex-col gap-4">
              <AutoHasManyThroughJoinModelForm>
                <AutoInput field="effectiveFrom" />
                <AutoInput field="effectiveTo" />
              </AutoHasManyThroughJoinModelForm>
            </div>
          </AutoHasManyThroughForm>
        </Card>

        <Card className="p-4 flex flex-col gap-4 bg-white">
          <Label>Has Many Through Form -- Professors</Label>
          <AutoHasManyThroughForm
            field="professors"
            recordLabel={{
              primary: ["title", "firstName", "lastName"],
            }}
          />
        </Card>
        <AutoSubmit className="w-full bg-white p-2 rounded-md" />
      </AutoForm>
    </div>
  );
};

export const DeepRelationshipChain = {
  render: (args) => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <AutoForm {...args}>
            <div className="bg-white p-4 rounded-md">
              <SubmitResultBanner />
            </div>

            <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
              <AutoInput field="englishName" />
              <AutoInput field="size" />

              {/* Root hasMany */}
              <AutoHasManyForm field="continents">
                <AutoInput field="englishName" />

                {/* level 1 hasMany */}
                <AutoHasManyForm field="countries">
                  <AutoInput field="englishName" />

                  {/* level 2 hasMany */}
                  <AutoHasManyForm field="cities">
                    <AutoInput field="englishName" />
                    <AutoInput field="localName" />

                    {/* level 3 hasMany || hasOne */}
                    <MayorOrCitizenSelect />
                  </AutoHasManyForm>
                </AutoHasManyForm>
              </AutoHasManyForm>
            </Card>
            <div className="mt-4">
              <AutoSubmit variant="default" className="w-full bg-white p-2 rounded-md" />
            </div>
          </AutoForm>
        </div>
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
      <div className="flex flex-row gap-4">
        <Label>Showing {showMayor ? "Mayor" : "Citizens"}</Label>
        <Button type="button" onClick={() => setShowMayor(!showMayor)}>
          Toggle
        </Button>
      </div>
      {showMayor ? (
        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasOneForm
            field="mayor"
            recordLabel={{
              primary: ["firstName", "lastName"],
            }}
          >
            <AutoInput field="firstName" />
            <AutoInput field="lastName" />
          </AutoHasOneForm>
        </Card>
      ) : (
        <Card className="p-6 w-full bg-white shadow-lg rounded-lg">
          <AutoHasManyForm
            field="citizens"
            recordLabel={{
              primary: ["firstName", "lastName"],
            }}
          >
            <AutoInput field="firstName" />
            <AutoInput field="lastName" />

            <AutoBelongsToForm
              field="cityOfMayorDuty"
              recordLabel={{
                primary: ["englishName", "localName"],
              }}
            >
              <AutoInput field="englishName" />
              <AutoInput field="localName" />
            </AutoBelongsToForm>
          </AutoHasManyForm>
        </Card>
      )}
    </>
  );
};
