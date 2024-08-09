import React from "react";
import { useAutoTableContext } from "../../../../src/auto/AutoTableContext.js";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";
import { mockGetWidgets, mockModelMetadata } from "./helpers.js";

const CustomComponent = (props: { record: any; index: number }) => {
  const [{ data }, refresh] = useAutoTableContext();
  return (
    <>
      <p>
        index: {props.index}, props.record.id: {props.record.id}, data[index].id: {data[props.index].id}
      </p>
      <button onClick={refresh}>refresh</button>
    </>
  );
};

describe("AutoTable - TableContext", () => {
  it("can be accessed from inside a custom cell renderer", () => {
    mockModelMetadata();
    mockGetWidgets();

    cy.mountWithWrapper(
      <PolarisAutoTable model={api.widget} select={{ name: true }} columns={[{ header: "custom", render: CustomComponent }]} />,
      PolarisWrapper
    );

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets");

    cy.contains("index: 0, props.record.id: 7, data[index].id: 7");

    cy.contains("refresh").first().click();
    cy.wait("@getWidgets");
    cy.get("@getWidgets");
  });
});
