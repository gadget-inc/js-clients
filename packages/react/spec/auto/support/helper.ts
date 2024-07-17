import { mockUrqlClient } from "../../testWrappers.js";
import { getGameCityModelMetadata, getGameCityRecord } from "./gameCityModel.js";
import { getUserModelMetadata, getUserRecord } from "./userModel.js";
import { getWidgetModelMetadata, getWidgetRecord } from "./widgetModel.js";

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
  overridesRecord?: Parameters<typeof getWidgetRecord>[0]
) => {
  mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: getWidgetRecord(overridesRecord),
  });

  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata(action),
  });
};

export const mockGameStadiumFindBy = (
  action: Parameters<typeof getGameCityModelMetadata>[0],
  overridesRecord?: Parameters<typeof getGameCityRecord>[0]
) => {
  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getGameCityModelMetadata(action),
  });

  mockUrqlClient.executeQuery.pushResponse("city", {
    stale: false,
    hasNext: false,
    data: getGameCityRecord(overridesRecord),
  });
};
