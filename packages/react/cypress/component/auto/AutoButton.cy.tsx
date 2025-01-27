/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../support/api.js";
import { describeForEachAutoAdapter } from "../../support/auto.js";

describeForEachAutoAdapter("AutoButton", ({ name, adapter: { AutoButton }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("shows a button, runs a create action with no variables, and reports success", () => {
    cy.mountWithWrapper(<AutoButton id="auto" action={api.widget.create} />, wrapper);
    cy.contains("Create Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "123",
          },
        },
      },
    }).as("createWidget");

    cy.get("#auto").click();

    cy.wait("@createWidget");
    cy.get("@createWidget").its("request.body.variables").should("deep.equal", { widget: {} });

    cy.contains("Create Widget succeeded.");
  });

  it("shows a button, runs a create action with variables, and reports success", () => {
    cy.mountWithWrapper(<AutoButton id="auto" action={api.widget.create} variables={{ widget: { name: "foobar" } }} />, wrapper);
    cy.contains("Create Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "123",
          },
        },
      },
    }).as("createWidget");

    cy.get("#auto").click();

    cy.wait("@createWidget");
    cy.get("@createWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        widget: { name: "foobar" },
      });

    cy.contains("Create Widget succeeded.");
  });

  it("shows a button, runs a create action with no variables, and reports an error if the network call fails", () => {
    cy.mountWithWrapper(<AutoButton id="auto" action={api.widget.create} />, wrapper);
    cy.contains("Create Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      forceNetworkError: true,
    }).as("createWidget");

    cy.get("#auto").click();

    cy.wait("@createWidget");

    cy.contains("Create Widget encountered an error:");
  });

  it("shows a button, runs an update action with variables, and reports success", () => {
    cy.mountWithWrapper(<AutoButton id="auto" action={api.widget.update} variables={{ id: "123", widget: { name: "foobar" } }} />, wrapper);
    cy.contains("Update Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=updateWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "123",
          },
        },
      },
    }).as("updateWidget");

    cy.get("#auto").click();

    cy.wait("@updateWidget");
    cy.get("@updateWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        id: "123",
        widget: { name: "foobar" },
      });

    cy.contains("Update Widget succeeded.");
  });

  it("allows overriding the label", () => {
    cy.mountWithWrapper(
      <AutoButton id="auto" action={api.widget.create}>
        Whizbang the flimflam
      </AutoButton>,
      wrapper
    );
    cy.contains("Whizbang the flimflam");
  });

  it("allows overriding the onSuccess behaviour", () => {
    let onSuccessCalled = false;
    cy.mountWithWrapper(
      <AutoButton
        id="auto"
        action={api.widget.update}
        variables={{ id: "123", widget: { name: "foobar" } }}
        onSuccess={(result: any) => {
          onSuccessCalled = true;
        }}
      />,
      wrapper
    );
    cy.contains("Update Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=updateWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "123",
          },
        },
      },
    }).as("updateWidget");

    cy.get("#auto").click();

    cy.wait("@updateWidget").then(() => {
      expect(onSuccessCalled).to.be.true;
    });
  });

  it("allows overriding the onError behaviour", () => {
    let onErrorCalled = false;
    cy.mountWithWrapper(
      <AutoButton
        id="auto"
        action={api.widget.update}
        variables={{ id: "123", widget: { name: "foobar" } }}
        onError={(error: Error) => {
          expect(error).to.be.instanceOf(Error);
          onErrorCalled = true;
        }}
      />,
      wrapper
    );
    cy.contains("Update Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=updateWidget`, {
      forceNetworkError: true,
    }).as("updateWidget");

    cy.get("#auto").click();

    cy.wait("@updateWidget").then(() => {
      expect(onErrorCalled).to.be.true;
    });
  });

  it("shows a button, runs an global action with no variables, and reports success", () => {
    cy.mountWithWrapper(<AutoButton id="auto" action={api.flipAll} />, wrapper);
    cy.contains("Flip all");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=flipAll`, {
      body: {
        data: {
          flipAll: null,
        },
      },
    }).as("flipAll");

    cy.get("#auto").click();

    cy.wait("@flipAll");
    cy.get("@flipAll").its("request.body.variables").should("deep.equal", {});

    cy.contains("Flip all succeeded.");
  });

  it("runs the onAction callback when the button is clicked, then runs the action as normal", () => {
    let onActionCalled = false;
    cy.mountWithWrapper(
      <AutoButton
        action={api.widget.create}
        variables={{ widget: { name: "foobar" } }}
        onAction={() => {
          onActionCalled = true;
        }}
      />,
      wrapper
    );
    cy.contains("Create Widget");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "123",
          },
        },
      },
    }).as("createWidget");

    cy.contains("Create Widget")
      .click()
      .then(() => {
        expect(onActionCalled).to.be.true;
      });

    cy.wait("@createWidget");
    cy.get("@createWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        widget: { name: "foobar" },
      });

    cy.contains("Create Widget succeeded.");
  });
});
