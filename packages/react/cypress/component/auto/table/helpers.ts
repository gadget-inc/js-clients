import { api } from "../../../support/api.js";
import { first50WidgetRecords, mockSearchResultWidget, widgetModelMetadata } from "./metadata/widgetMetadata.js";

export const mockModelMetadata = () => {
  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.options.endpoint}?operation=GetModelMetadata`,
      times: 1,
    },
    (req) => {
      req.reply(widgetModelMetadata);
    }
  ).as("getModelMetadata");
};

export const mockGetWidgets = () => {
  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.options.endpoint}?operation=widgets`,
      times: 2,
    },
    (req) => {
      req.reply(first50WidgetRecords);
    }
  ).as("getWidgets");
};

export const mockGetWidgetsWithSearch = (searchedForWidgetName: string) => {
  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.options.endpoint}?operation=widgets`,
      times: 1,
    },
    (req) => {
      req.reply(mockSearchResultWidget(searchedForWidgetName));
    }
  ).as("getWidgetsWithSearch");
};
