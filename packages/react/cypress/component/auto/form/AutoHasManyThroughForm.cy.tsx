import React from "react";
import { AutoHasManyThroughJoinModelForm } from "../../../../src/auto/hooks/useHasManyThroughController.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter(
  "AutoHasManyForm",
  ({ name, adapter: { AutoForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoHasManyThroughForm }, wrapper, clickOptions }) => {
    const interceptModelUpdateActionMetadata = () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
        },
        RealUniversityCourseMetadata
      ).as("ModelCreateActionMetadata");
    };

    const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=updateCourse`,
        },
        (req) => {
          // eslint-disable-next-line
          expect(req.body.variables).to.deep.equal(expectedQueryValue);
          req.reply({ data: { updateCourse: { success: true, errors: null, x: {} } } });
        }
      ).as("updateCourse");
    };

    const interceptCourseQuery = () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=course`,
        },
        (req) => {
          req.reply(courseLookupResponse);
        }
      ).as("course");
    };

    const interceptStudentsOptionsQuery = () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=students`,
        },
        (req) => {
          req.reply(studentsLookupResponse);
        }
      ).as("students");
    };

    const isWC = name === SUITE_NAMES.POLARIS_WC;
    const containsOpts = isWC ? { includeShadowDom: true as const } : undefined;

    /** Get the <input> inside a web component (by id) or a regular input (by id) */
    const getInputById = (fieldId: string) => {
      if (isWC) {
        return cy.get(`[id="${fieldId}"]`).shadow().find("input");
      }
      return cy.get(`[id="${fieldId}"]`);
    };

    /** Get the <input> inside a web component (by id) or a regular input (by name) */
    const getInputByName = (fieldName: string) => {
      if (isWC) {
        return cy.get(`[id="${fieldName}"]`).shadow().find("input");
      }
      return cy.get(`[name="${fieldName}"]`);
    };

    beforeEach(() => {
      cy.viewport("macbook-13");

      interceptModelUpdateActionMetadata();
      interceptStudentsOptionsQuery();
      interceptCourseQuery();
    });

    it("renders form fields for related records through join table", () => {
      cy.mountWithWrapper(
        <AutoForm action={api.university.course.update} findBy="3">
          <AutoHasManyThroughForm
            field="students"
            recordLabel={{
              primary: ["firstName", "lastName"],
              secondary: ({ record }: any) => `Year: ${record.year}`,
              tertiary: "department",
            }}
          >
            <AutoHasManyThroughJoinModelForm>
              <AutoInput field="effectiveFrom" />
              <AutoInput field="effectiveTo" />
              <AutoInput field="attempt" />
            </AutoHasManyThroughJoinModelForm>
          </AutoHasManyThroughForm>
          <AutoSubmit id="submit" />
        </AutoForm>,
        wrapper
      );

      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@course");
      cy.wait("@students");

      cy.contains("Add Students").click(clickOptions);
      cy.contains("Emma Williams").click(clickOptions);
      cy.contains("Add Students").click(clickOptions);

      cy.wait(1000);
      cy.get('[id="deleteButton_students.0"]').click(clickOptions);
      cy.wait(1000);

      expectUpdateActionSubmissionVariables({
        course: {
          registrations: [
            //  Deleted first
            { delete: { id: "1" } },
            // Updated second
            {
              update: {
                effectiveFrom: "2025-02-18T00:00:00.000Z",
                effectiveTo: "2025-02-22T00:00:00.000Z",
                id: "50",
                attempt: 1,
                student: {
                  update: {
                    department: null,
                    firstName: "Benjamin",
                    id: "43",
                    lastName: "Martin",
                    year: null,
                  },
                },
              },
            },
            // Created third
            {
              create: {
                effectiveFrom: null,
                effectiveTo: null,
                attempt: 2,
                student: { _link: "10" },
              },
            },
          ],
        },
        id: "3",
      });

      cy.get('[id="submit"]').click(clickOptions);
      cy.contains("Attempt is required", containsOpts).should("exist"); // Validation for blank field

      getInputById("course.registrations.0.attempt").type("1");
      getInputById("course.registrations.1.attempt").type("2");

      cy.get('[id="submit"]').click(clickOptions);
      cy.wait("@updateCourse");
    });

    it("can update fields on the sibling model", () => {
      cy.mountWithWrapper(
        <AutoForm action={api.university.course.update} findBy="3">
          <AutoHasManyThroughForm
            field="students"
            primaryLabel={["firstName", "lastName"]}
            secondaryLabel={(record: any) => `Year: ${record.year}`}
            tertiaryLabel="department"
          >
            <AutoInput field="firstName" />
            <AutoInput field="lastName" />
            <AutoInput field="year" />
          </AutoHasManyThroughForm>
          <AutoSubmit id="submit" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@course");
      cy.wait("@students");

      cy.wait(1000);
      cy.get('[id="deleteButton_students.0"]').click(clickOptions);
      cy.wait(1000);
      getInputByName("course.registrations.0.student.firstName").click(clickOptions).type("- updated");
      getInputByName("course.registrations.0.student.lastName").click(clickOptions).type("- updated");
      getInputByName("course.registrations.0.student.year").click(clickOptions).type("- updated");
      getInputByName("course.registrations.0.student.year").click(clickOptions).type("1");

      expectUpdateActionSubmissionVariables({
        course: {
          registrations: [
            {
              delete: {
                id: "1",
              },
            },
            {
              update: {
                effectiveFrom: "2025-02-18",
                effectiveTo: "2025-02-22",
                id: "50",
                student: {
                  update: {
                    firstName: "Benjamin- updated",
                    id: "43",
                    lastName: "Martin- updated",
                    year: 1,
                  },
                },
              },
            },
          ],
        },
        id: "3",
      });
      cy.get('[id="submit"]').click(clickOptions);
      cy.wait("@updateCourse");
    });
  }
);

const RealUniversityCourseMetadata = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          key: "O5xGYZ0ckkg5",
          name: "Course",
          namespace: ["university"],
          apiIdentifier: "course",
          defaultRecord: {
            __typename: "UniversityCourse",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Title",
              apiIdentifier: "title",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Description",
              apiIdentifier: "description",
              fieldType: "RichText",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "RichText",
                validations: [],
              },
            },
            {
              name: "Students",
              apiIdentifier: "students",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "phV3mO3mexJO",
                  name: "Student",
                  apiIdentifier: "student",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "courses",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "WyJz8-qDaR-0",
                  apiIdentifier: "registration",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "student",
                  __typename: "GadgetModelField",
                },
                joinModelHasManyFieldApiIdentifier: "registrations",
              },
            },
            {
              name: "Professors",
              apiIdentifier: "professors",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "qgztBFGTtsAc",
                  name: "Professor",
                  apiIdentifier: "professor",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "courses",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "GcClifat5eV4",
                  apiIdentifier: "assignment",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "professor",
                  __typename: "GadgetModelField",
                },
                joinModelHasManyFieldApiIdentifier: "assignments",
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Registrations",
              apiIdentifier: "registrations",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: true,
                relatedModel: {
                  key: "WyJz8-qDaR-0",
                  name: "Registration",
                  apiIdentifier: "registration",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Assignments",
              apiIdentifier: "assignments",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: true,
                relatedModel: {
                  key: "GcClifat5eV4",
                  name: "Assignment",
                  apiIdentifier: "assignment",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "Title",
            apiIdentifier: "title",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "GcClifat5eV4",
          name: "Assignment",
          namespace: ["university"],
          apiIdentifier: "assignment",
          defaultRecord: {
            __typename: "UniversityAssignment",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Course",
              apiIdentifier: "course",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "O5xGYZ0ckkg5",
                  name: "Course",
                  apiIdentifier: "course",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Professor",
              apiIdentifier: "professor",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "qgztBFGTtsAc",
                  name: "Professor",
                  apiIdentifier: "professor",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "qgztBFGTtsAc",
          name: "Professor",
          namespace: ["university"],
          apiIdentifier: "professor",
          defaultRecord: {
            title: "Dr",
            __typename: "UniversityProfessor",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Title",
              apiIdentifier: "title",
              fieldType: "Enum",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetEnumConfig",
                fieldType: "Enum",
                validations: [],
                allowMultiple: false,
                allowOther: false,
                options: [
                  {
                    name: "Dr",
                    color: "#FCFCFC",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Mr",
                    color: "#606060",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Mrs",
                    color: "#DF2222",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Miss",
                    color: "#E26722",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Mz",
                    color: "#E2CD2E",
                    __typename: "GadgetEnumOption",
                  },
                ],
              },
            },
            {
              name: "First name",
              apiIdentifier: "firstName",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Last name",
              apiIdentifier: "lastName",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Courses",
              apiIdentifier: "courses",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "O5xGYZ0ckkg5",
                  name: "Course",
                  apiIdentifier: "course",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "professors",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "GcClifat5eV4",
                  apiIdentifier: "assignment",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "professor",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
                joinModelHasManyFieldApiIdentifier: "assignments",
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Assignments",
              apiIdentifier: "assignments",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: true,
                relatedModel: {
                  key: "GcClifat5eV4",
                  name: "Assignment",
                  apiIdentifier: "assignment",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "professor",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "First name",
            apiIdentifier: "firstName",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "WyJz8-qDaR-0",
          name: "Registration",
          namespace: ["university"],
          apiIdentifier: "registration",
          defaultRecord: {
            __typename: "UniversityRegistration",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Attempt",
              apiIdentifier: "attempt",
              fieldType: "Number",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetNumberConfig",
                fieldType: "Number",
                validations: [],
                decimals: null,
              },
            },
            {
              name: "Effective from",
              apiIdentifier: "effectiveFrom",
              fieldType: "DateTime",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: false,
              },
            },
            {
              name: "Effective to",
              apiIdentifier: "effectiveTo",
              fieldType: "DateTime",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [],
                includeTime: false,
              },
            },
            {
              name: "Student",
              apiIdentifier: "student",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "phV3mO3mexJO",
                  name: "Student",
                  apiIdentifier: "student",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Course",
              apiIdentifier: "course",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "O5xGYZ0ckkg5",
                  name: "Course",
                  apiIdentifier: "course",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "phV3mO3mexJO",
          name: "Student",
          namespace: ["university"],
          apiIdentifier: "student",
          defaultRecord: {
            __typename: "UniversityStudent",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "First name",
              apiIdentifier: "firstName",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Last name",
              apiIdentifier: "lastName",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Year",
              apiIdentifier: "year",
              fieldType: "Number",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetNumberConfig",
                fieldType: "Number",
                validations: [
                  {
                    __typename: "GadgetRangeFieldValidation",
                    name: "Number range",
                    specID: "gadget/validation/number-range",
                    min: 1,
                    max: 10,
                  },
                ],
                decimals: 0,
              },
            },
            {
              name: "Department",
              apiIdentifier: "department",
              fieldType: "Enum",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetEnumConfig",
                fieldType: "Enum",
                validations: [],
                allowMultiple: false,
                allowOther: false,
                options: [
                  {
                    name: "Arts",
                    color: "#FCFCFC",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Science",
                    color: "#606060",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Law",
                    color: "#DF2222",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Medicine",
                    color: "#E26722",
                    __typename: "GadgetEnumOption",
                  },
                ],
              },
            },
            {
              name: "Courses",
              apiIdentifier: "courses",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "O5xGYZ0ckkg5",
                  name: "Course",
                  apiIdentifier: "course",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "students",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "WyJz8-qDaR-0",
                  apiIdentifier: "registration",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "student",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "course",
                  __typename: "GadgetModelField",
                },
                joinModelHasManyFieldApiIdentifier: "registrations",
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Registrations",
              apiIdentifier: "registrations",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: true,
                relatedModel: {
                  key: "WyJz8-qDaR-0",
                  name: "Registration",
                  apiIdentifier: "registration",
                  namespace: ["university"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "student",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "First name",
            apiIdentifier: "firstName",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
      ],
      model: {
        key: "O5xGYZ0ckkg5",
        name: "Course",
        namespace: ["university"],
        apiIdentifier: "course",
        defaultRecord: {
          __typename: "UniversityCourse",
        },
        action: {
          name: "Update",
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
          isDeleteAction: false,
          isUpsertMetaAction: false,
          inputFields: [
            {
              name: "Course",
              apiIdentifier: "course",
              fieldType: "Object",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetObjectFieldConfig",
                fieldType: "Object",
                validations: [],
                name: null,
                fields: [
                  {
                    name: "Title",
                    apiIdentifier: "title",
                    fieldType: "String",
                    requiredArgumentForInput: false,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "String",
                      validations: [],
                    },
                  },
                  {
                    name: "Description",
                    apiIdentifier: "description",
                    fieldType: "RichText",
                    requiredArgumentForInput: false,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "RichText",
                      validations: [],
                    },
                  },
                  {
                    name: "Registrations",
                    apiIdentifier: "registrations",
                    fieldType: "HasMany",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyConfig",
                      fieldType: "HasMany",
                      validations: [],
                      isJoinModelHasManyField: true,
                      relatedModel: {
                        key: "WyJz8-qDaR-0",
                        name: "Registration",
                        apiIdentifier: "registration",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "course",
                        __typename: "GadgetModelField",
                      },
                    },
                  },
                  {
                    name: "Students",
                    apiIdentifier: "students",
                    fieldType: "HasManyThrough",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyThroughConfig",
                      fieldType: "HasManyThrough",
                      validations: [],
                      relatedModel: {
                        key: "phV3mO3mexJO",
                        name: "Student",
                        apiIdentifier: "student",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "courses",
                        __typename: "GadgetModelField",
                      },
                      joinModel: {
                        key: "WyJz8-qDaR-0",
                        apiIdentifier: "registration",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseJoinModelField: {
                        apiIdentifier: "course",
                        __typename: "GadgetModelField",
                      },
                      inverseRelatedModelField: {
                        apiIdentifier: "student",
                        __typename: "GadgetModelField",
                      },
                      joinModelHasManyFieldApiIdentifier: "registrations",
                    },
                  },
                  {
                    name: "Assignments",
                    apiIdentifier: "assignments",
                    fieldType: "HasMany",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyConfig",
                      fieldType: "HasMany",
                      validations: [],
                      isJoinModelHasManyField: true,
                      relatedModel: {
                        key: "GcClifat5eV4",
                        name: "Assignment",
                        apiIdentifier: "assignment",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "course",
                        __typename: "GadgetModelField",
                      },
                    },
                  },
                  {
                    name: "Professors",
                    apiIdentifier: "professors",
                    fieldType: "HasManyThrough",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyThroughConfig",
                      fieldType: "HasManyThrough",
                      validations: [],
                      relatedModel: {
                        key: "qgztBFGTtsAc",
                        name: "Professor",
                        apiIdentifier: "professor",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "courses",
                        __typename: "GadgetModelField",
                      },
                      joinModel: {
                        key: "GcClifat5eV4",
                        apiIdentifier: "assignment",
                        namespace: ["university"],
                        __typename: "GadgetModel",
                      },
                      inverseJoinModelField: {
                        apiIdentifier: "course",
                        __typename: "GadgetModelField",
                      },
                      inverseRelatedModelField: {
                        apiIdentifier: "professor",
                        __typename: "GadgetModelField",
                      },
                      joinModelHasManyFieldApiIdentifier: "assignments",
                    },
                  },
                ],
              },
              __typename: "GadgetObjectField",
            },
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [],
              },
              __typename: "GadgetObjectField",
            },
          ],
          triggers: [
            {
              specID: "gadget/trigger/graphql_api",
              __typename: "GadgetTrigger",
            },
          ],
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};

const courseLookupResponse = {
  data: {
    university: {
      course: {
        id: "3",
        title: "Math 101",
        description: {
          markdown: "This is an intro math course. We teach calculus",
          truncatedHTML: "<p>This is an intro math course. We teach calculus</p> ",
          __typename: "RichText",
        },
        registrations: {
          edges: [
            {
              node: {
                id: "1",
                effectiveFrom: "2024-11-12",
                effectiveTo: "2024-10-17",
                student: {
                  id: "1",
                  firstName: "Lucas",
                  lastName: "Hernandez",
                  __typename: "UniversityStudent",
                },
                studentId: "1",
                __typename: "UniversityRegistration",
              },
              __typename: "UniversityRegistrationEdge",
            },
            {
              node: {
                id: "50",
                effectiveFrom: "2025-02-18",
                effectiveTo: "2025-02-22",
                student: {
                  id: "43",
                  firstName: "Benjamin",
                  lastName: "Martin",
                  __typename: "UniversityStudent",
                },
                studentId: "43",
                __typename: "UniversityRegistration",
              },
              __typename: "UniversityRegistrationEdge",
            },
          ],
          __typename: "UniversityRegistrationConnection",
        },
        assignments: {
          edges: [
            {
              node: {
                id: "13",
                professor: {
                  id: "42",
                  firstName: "Kevin",
                  title: "Mrs",
                  lastName: "Bailey",
                  __typename: "UniversityProfessor",
                },
                __typename: "UniversityAssignment",
              },
              __typename: "UniversityAssignmentEdge",
            },
          ],
          __typename: "UniversityAssignmentConnection",
        },
        __typename: "UniversityCourse",
      },
      __typename: "UniversityQueries",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};

const studentsLookupResponse = {
  data: {
    university: {
      students: {
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "eyJpZCI6IjEifQ==",
          endCursor: "eyJpZCI6IjI1In0=",
          __typename: "PageInfo",
        },
        edges: [
          {
            cursor: "eyJpZCI6IjEifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "1",
              createdAt: "2024-10-28T19:50:41.809Z",
              department: "Arts",
              firstName: "Lucas",
              lastName: "Hernandez",
              updatedAt: "2024-10-29T14:31:13.993Z",
              year: 6,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjIifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "2",
              createdAt: "2024-10-28T19:50:41.815Z",
              department: "Arts",
              firstName: "Mason",
              lastName: "Wilson",
              updatedAt: "2024-10-28T19:52:22.843Z",
              year: 7,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjMifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "3",
              createdAt: "2024-10-28T19:50:41.820Z",
              department: "Science",
              firstName: "Noah",
              lastName: "Brown",
              updatedAt: "2024-10-28T19:52:23.059Z",
              year: 5,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjQifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "4",
              createdAt: "2024-10-28T19:50:41.827Z",
              department: "Law",
              firstName: "Ava",
              lastName: "Jones",
              updatedAt: "2024-10-28T19:52:23.159Z",
              year: 1,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjUifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "5",
              createdAt: "2024-10-28T19:50:41.836Z",
              department: "Medicine",
              firstName: "Olivia",
              lastName: "Johnson",
              updatedAt: "2024-10-28T19:52:23.248Z",
              year: 8,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjYifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "6",
              createdAt: "2024-10-28T19:50:41.850Z",
              department: "Science",
              firstName: "Sophia",
              lastName: "Martinez",
              updatedAt: "2024-10-29T14:08:09.031Z",
              year: 2,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjcifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "7",
              createdAt: "2024-10-28T19:50:41.853Z",
              department: "Law",
              firstName: "Elijah",
              lastName: "Garcia",
              updatedAt: "2024-10-28T19:52:23.573Z",
              year: 4,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjgifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "8",
              createdAt: "2024-10-28T19:50:41.860Z",
              department: "Medicine",
              firstName: "Mia",
              lastName: "Lopez",
              updatedAt: "2024-10-28T19:52:23.689Z",
              year: 9,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjkifQ==",
            node: {
              __typename: "UniversityStudent",
              id: "9",
              createdAt: "2024-10-28T19:50:41.863Z",
              department: "Arts",
              firstName: "Liam",
              lastName: "Smith",
              updatedAt: "2024-10-28T19:52:23.783Z",
              year: 3,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjEwIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "10",
              createdAt: "2024-10-28T19:50:41.880Z",
              department: "Science",
              firstName: "Emma",
              lastName: "Williams",
              updatedAt: "2024-10-28T19:52:23.889Z",
              year: 10,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjExIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "11",
              createdAt: "2024-10-28T19:50:41.910Z",
              department: "Science",
              firstName: "Benjamin",
              lastName: "Moore",
              updatedAt: "2024-10-28T19:52:24.013Z",
              year: 10,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjEyIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "12",
              createdAt: "2024-10-28T19:50:41.914Z",
              department: "Law",
              firstName: "James",
              lastName: "Thomas",
              updatedAt: "2024-10-28T19:52:24.138Z",
              year: 3,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjEzIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "13",
              createdAt: "2024-10-28T19:50:41.916Z",
              department: "Medicine",
              firstName: "Isabella",
              lastName: "Anderson",
              updatedAt: "2024-10-28T19:52:24.330Z",
              year: 2,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE0In0=",
            node: {
              __typename: "UniversityStudent",
              id: "14",
              createdAt: "2024-10-28T19:50:41.936Z",
              department: "Law",
              firstName: "Avery",
              lastName: "Harris",
              updatedAt: "2024-10-28T19:52:24.446Z",
              year: 4,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE1In0=",
            node: {
              __typename: "UniversityStudent",
              id: "15",
              createdAt: "2024-10-28T19:50:41.948Z",
              department: "Law",
              firstName: "Amelia",
              lastName: "Jackson",
              updatedAt: "2024-10-28T19:52:24.578Z",
              year: 1,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE2In0=",
            node: {
              __typename: "UniversityStudent",
              id: "16",
              createdAt: "2024-10-28T19:50:41.975Z",
              department: "Arts",
              firstName: "Charlotte",
              lastName: "Taylor",
              updatedAt: "2024-10-28T19:52:24.673Z",
              year: 6,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE3In0=",
            node: {
              __typename: "UniversityStudent",
              id: "17",
              createdAt: "2024-10-28T19:50:41.979Z",
              department: "Arts",
              firstName: "Oliver",
              lastName: "Martin",
              updatedAt: "2024-10-28T19:52:24.773Z",
              year: 8,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE4In0=",
            node: {
              __typename: "UniversityStudent",
              id: "18",
              createdAt: "2024-10-28T19:50:41.995Z",
              department: "Arts",
              firstName: "Elena",
              lastName: "Garcia",
              updatedAt: "2024-10-28T19:52:24.878Z",
              year: 5,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjE5In0=",
            node: {
              __typename: "UniversityStudent",
              id: "19",
              createdAt: "2024-10-28T19:50:42.003Z",
              department: "Arts",
              firstName: "Ethan",
              lastName: "White",
              updatedAt: "2024-10-28T19:52:24.988Z",
              year: 7,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjIwIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "20",
              createdAt: "2024-10-28T19:50:42.012Z",
              department: "Science",
              firstName: "Harper",
              lastName: "Thompson",
              updatedAt: "2024-10-28T19:52:25.100Z",
              year: 9,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjIxIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "21",
              createdAt: "2024-10-28T19:50:42.018Z",
              department: "Law",
              firstName: "Alexander",
              lastName: "Clark",
              updatedAt: "2024-10-28T19:52:25.191Z",
              year: 6,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjIyIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "22",
              createdAt: "2024-10-28T19:50:42.022Z",
              department: "Medicine",
              firstName: "Scarlett",
              lastName: "Robinson",
              updatedAt: "2024-10-28T19:52:25.275Z",
              year: 1,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjIzIn0=",
            node: {
              __typename: "UniversityStudent",
              id: "23",
              createdAt: "2024-10-28T19:50:42.045Z",
              department: "Science",
              firstName: "Henry",
              lastName: "Martinez",
              updatedAt: "2024-10-28T19:52:25.362Z",
              year: 3,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjI0In0=",
            node: {
              __typename: "UniversityStudent",
              id: "24",
              createdAt: "2024-10-28T19:50:42.200Z",
              department: "Law",
              firstName: "Jack",
              lastName: "Lee",
              updatedAt: "2024-10-28T19:52:25.476Z",
              year: 10,
            },
            __typename: "UniversityStudentEdge",
          },
          {
            cursor: "eyJpZCI6IjI1In0=",
            node: {
              __typename: "UniversityStudent",
              id: "25",
              createdAt: "2024-10-28T19:50:42.460Z",
              department: "Arts",
              firstName: "Sofia",
              lastName: "Lewis",
              updatedAt: "2024-10-28T19:52:25.557Z",
              year: 2,
            },
            __typename: "UniversityStudentEdge",
          },
        ],
        __typename: "UniversityStudentConnection",
      },
      __typename: "UniversityQueries",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};
