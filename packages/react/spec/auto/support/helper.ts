import { mockUrqlClient } from "../../testWrappers.js";
import { getStadiumModelMetadata, getStadiumRecord } from "./stadiumModel.js";
import { getUserModelMetadata, getUserRecord } from "./userModel.js";
import { getWidgetModelMetadata, getWidgetRecordResponse } from "./widgetModel.js";

/**
 * Helper function to mock the response of a typical form operation with an "update" action.
 */
export const mockUserFindBy = async (
  action: Parameters<typeof getUserModelMetadata>[0],
  overridesRecord?: Parameters<typeof getUserRecord>[0]
) => {
  await mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getUserModelMetadata(action),
  });

  await mockUrqlClient.executeQuery.pushResponse("user", {
    stale: false,
    hasNext: false,
    data: getUserRecord(overridesRecord),
  });
};

/**
 * Helper function to mock the response of a typical form operation with an "update" action.
 */
export const mockWidgetFindBy = async (
  action: Parameters<typeof getWidgetModelMetadata>[0],
  overridesRecord?: Parameters<typeof getWidgetRecordResponse>[0]
) => {
  await mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata(action),
  });

  await mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: getWidgetRecordResponse(overridesRecord),
  });
};

export const mockGameStadiumFindBy = async (
  action: Parameters<typeof getStadiumModelMetadata>[0],
  overridesRecord?: Parameters<typeof getStadiumRecord>[0]
) => {
  await mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getStadiumModelMetadata(action),
  });

  await mockUrqlClient.executeQuery.pushResponse("stadium", {
    stale: false,
    hasNext: false,
    data: getStadiumRecord(overridesRecord),
  });
};
