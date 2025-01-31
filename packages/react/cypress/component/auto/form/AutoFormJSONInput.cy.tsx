/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter(
  "AutoFormJSONInput",
  ({ name, adapter: { AutoForm, AutoJSONInput, AutoSubmit, SubmitResultBanner, AutoInput }, wrapper }) => {
    const AutoJSONInputWithSubmit = (props: { field: string }) => (
      <>
        <AutoJSONInput {...props} />
        <AutoSubmit id="auto" />
      </>
    );

    const AutoInputWithSubmit = () => (
      <>
        <SubmitResultBanner />
        <AutoJSONInput field="metafields" />
        <AutoInput field="name" />
        <AutoInput field="inventoryCount" />
        <AutoSubmit id="auto" />
        <AutoSubmit id="auto" />
      </>
    );

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("shows a inline error message when the value is not a valid JSON, and allows submission it when it is valid", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=createWidget`,
          times: 1,
        },
        {
          body: {
            data: {
              createWidget: {
                success: true,
                errors: null,
                widget: {
                  id: "1",
                  name: "foobar",
                  inventoryCount: 10,
                  metafields: '{"foo": "bar"}',
                },
              },
            },
          },
        }
      );

      cy.mountWithWrapper(
        <AutoForm action={api.widget.create}>
          <AutoInputWithSubmit />
        </AutoForm>,
        wrapper
      );

      cy.get(`textarea[name="widget.metafields"]`).type("not a valid JSON");

      // fill in other required attributes
      cy.get(`input[name="widget.inventoryCount"]`).type("10");
      cy.get(`input[name="widget.name"]`).type("foobar");

      // try to submit form, but it shouldn't submit as the json field is invalid
      cy.get(`#auto`).click();

      cy.contains(`Invalid JSON: Unexpected token 'o', "not a valid JSON" is not valid JSON`);

      cy.get(`textarea[name="widget.metafields"]`).clear().type(`{"foo": "bar"}`, { parseSpecialCharSequences: false });

      cy.get(`#auto`).click();

      cy.contains(`Saved Widget successfully`);
    });

    it("formats an existing object JSON value when fetching the record", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=widget`,
        },
        {
          body: {
            data: {
              widget: {
                __typename: "Widget",
                id: "1",
                createdAt: "2024-06-26T20:01:06.794Z",
                inventoryCount: 123,
                metafields: {
                  hello: "world!",
                },
                name: "example value for name",
                updatedAt: "2024-07-03T15:02:12.968Z",
              },
            },
          },
        }
      ).as("widget");

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="1">
          <AutoJSONInputWithSubmit field="metafields" />
        </AutoForm>,
        wrapper
      );

      cy.wait("@widget");
      cy.get(`textarea[name="widget.metafields"]`).should(
        "have.value",
        `{
  "hello": "world!"
}` // The JSON value is formatted with 2 spaces
      );
    });

    it("formats an existing string JSON value when fetching the record", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=widget`,
        },
        {
          body: {
            data: {
              widget: {
                __typename: "Widget",
                id: "2",
                createdAt: "2024-06-26T20:01:06.794Z",
                inventoryCount: 123,
                metafields: "some stored string",
                name: "example value for name",
                updatedAt: "2024-07-03T15:02:12.968Z",
              },
            },
          },
        }
      ).as("widget");

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="2">
          <AutoJSONInputWithSubmit field="metafields" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@widget");

      cy.get(`textarea[name="widget.metafields"]`).should(
        "have.value",
        `"some stored string"` // rendered as a JSON encoded string, not the raw contents of it
      );
    });

    it("renders when there is no existing JSON value when fetching the record", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=widget`,
          times: 1,
        },
        {
          body: {
            data: {
              widget: {
                __typename: "Widget",
                id: "3",
                createdAt: "2024-06-26T20:01:06.794Z",
                inventoryCount: 123,
                name: "example value for name",
                updatedAt: "2024-07-03T15:02:12.968Z",
              },
            },
          },
        }
      ).as("widget");

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="3">
          <AutoJSONInputWithSubmit field="metafields" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@widget");

      cy.get(`textarea[name="widget.metafields"]`).should("have.value", ``);
    });

    it("renders when there is a null existing JSON value when fetching the record", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=widget`,
          times: 1,
        },
        {
          body: {
            data: {
              widget: {
                __typename: "Widget",
                id: "3",
                createdAt: "2024-06-26T20:01:06.794Z",
                inventoryCount: 123,
                name: "example value for name",
                updatedAt: "2024-07-03T15:02:12.968Z",
                metafields: null,
              },
            },
          },
        }
      );

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="3">
          <AutoJSONInputWithSubmit field="metafields" />
        </AutoForm>,
        wrapper
      );

      cy.get(`textarea[name="widget.metafields"]`).should("have.value", ``);
    });

    it("allows clearing a JSON value by emptying the input", () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=widget`,
          times: 1,
        },
        {
          body: {
            data: {
              widget: {
                __typename: "Widget",
                id: "1",
                createdAt: "2024-06-26T20:01:06.794Z",
                inventoryCount: 123,
                metafields: {
                  hello: "world!",
                },
                name: "example value for name",
                updatedAt: "2024-07-03T15:02:12.968Z",
              },
            },
          },
        }
      ).as("widget");

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="1">
          <AutoJSONInputWithSubmit field="metafields" />
        </AutoForm>,
        wrapper
      );

      cy.wait("@widget");

      cy.get(`textarea[name="widget.metafields"]`).clear();
      cy.get(`textarea[name="widget.metafields"]`).should("have.value", "");

      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.options.endpoint}?operation=updateWidget`,
        },
        (req) => {
          expect(req.body.variables.widget.metafields).to.be.null;

          return {
            body: {
              data: {
                updateWidget: {
                  success: true,
                  errors: null,
                  widget: {
                    id: "1",
                    name: "foobar",
                    inventoryCount: 10,
                    metafields: '{"foo": "bar"}',
                  },
                },
              },
            },
          };
        }
      ).as("updateWidget");

      cy.get(`#auto`).click();
      cy.wait("@updateWidget");
    });
  }
);
