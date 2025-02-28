import { mockUrqlClient } from "../../testWrappers.js";
import { getStadiumModelMetadata, getStadiumRecord } from "./stadiumModel.js";
import { getUserModelMetadata, getUserRecord } from "./userModel.js";
import { getWidgetModelMetadata, getWidgetRecordResponse } from "./widgetModel.js";

/**
 * Helper function to mock the response of a typical form operation with an "update" action.
 */
export const mockUserFindBy = (
  action: Parameters<typeof getUserModelMetadata>[0],
  overridesRecord?: Parameters<typeof getUserRecord>[0]
) => {
  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getUserModelMetadata(action),
  });

  mockUrqlClient.executeQuery.pushResponse("user", {
    stale: false,
    hasNext: false,
    data: getUserRecord(overridesRecord),
  });
};

/**
 * Helper function to mock the response of a typical form operation with an "update" action.
 */
export const mockWidgetFindBy = (
  action: Parameters<typeof getWidgetModelMetadata>[0],
  overridesRecord?: Parameters<typeof getWidgetRecordResponse>[0]
) => {
  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata(action),
  });

  mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: getWidgetRecordResponse(overridesRecord),
  });
};

export const mockGameStadiumFindBy = (
  action: Parameters<typeof getStadiumModelMetadata>[0],
  overridesRecord?: Parameters<typeof getStadiumRecord>[0]
) => {
  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getStadiumModelMetadata(action),
  });

  mockUrqlClient.executeQuery.pushResponse("stadium", {
    stale: false,
    hasNext: false,
    data: getStadiumRecord(overridesRecord),
  });
};
