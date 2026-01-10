import client from "@/shared/api/client";
import { RegionsResponse, RayonsResponse } from "../model/types";

export const getRegions = async (): Promise<RegionsResponse> => {
  const response = await client.get<RegionsResponse>("/erp-regions");
  return response.data;
};

export const getRayons = async (
  regionId: number
): Promise<RayonsResponse> => {
  const response = await client.get<RayonsResponse>(`/erp-rayons/${regionId}`);
  return response.data;
};
