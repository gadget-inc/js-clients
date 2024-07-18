import React from "react";
import { PolarisAutoTableFileCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableFileCell.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisAutoTableFileCell", () => {
  it("renders the file value and preview the image", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableFileCell
        value={{
          url: "https://assets.gadget.dev/assets/icon.svg",
          fileName: "icon.svg",
          mimeType: "image/svg+xml",
          __typename: "StoredFile",
        }}
      />,
      PolarisWrapper
    );

    cy.get(".Polaris-Thumbnail").get("img").should("have.attr", "src", "https://assets.gadget.dev/assets/icon.svg");
    cy.contains("icon.svg");
  });

  it("renders the file value and preview the note icon if it's not an image", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableFileCell
        value={{
          url: "https://example.com",
          fileName: "file.pdf",
          mimeType: "application/pdf",
          __typename: "StoredFile",
        }}
      />,
      PolarisWrapper
    );

    cy.get(".Polaris-Thumbnail").should("not.exist");
    cy.contains("file.pdf");
  });

  it("truncate the file name and keep the extension if it's too long", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableFileCell
        value={{
          url: "https://example.com",
          fileName: "some-super-important-document.pdf",
          mimeType: "application/pdf",
          __typename: "StoredFile",
        }}
      />,
      PolarisWrapper
    );

    cy.contains("some-super-i(..).pdf");
  });
});
