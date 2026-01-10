import client from "@/shared/api/client";
import {
  PositionLevelsResponse,
  PositionsResponse,
} from "../model/types";

export const getPositionLevels = async (): Promise<PositionLevelsResponse> => {
  const response = await client.get<PositionLevelsResponse>("/position/levels");
  return response.data;
};

export const getPositions = async (): Promise<PositionsResponse> => {
  const response = await client.get<PositionsResponse>("/position/index");
  return response.data;
};
