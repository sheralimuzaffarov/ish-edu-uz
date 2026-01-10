import client from "@/shared/api/client";
import {
  VacanciesResponse,
  VacancyDetailResponse,
  VacancyFilters,
} from "../model/types";

export const getVacancies = async (
  filters: VacancyFilters = {}
): Promise<VacanciesResponse> => {
  const params = new URLSearchParams();
  
  if (filters.region_id) params.append("region_id", filters.region_id.toString());
  if (filters.rayon_id) params.append("rayon_id", filters.rayon_id.toString());
  if (filters.school_id) params.append("school_id", filters.school_id.toString());
  if (filters.position_level_id) params.append("position_level_id", filters.position_level_id.toString());
  if (filters.position_id) params.append("position_id", filters.position_id.toString());
  if (filters.page) params.append("page", filters.page.toString());
  if (filters.pageSize) params.append("pageSize", filters.pageSize.toString());

  const response = await client.get<VacanciesResponse>(
    `/school-job-vacancies?${params.toString()}`
  );
  return response.data;
};

export const getVacancyById = async (
  id: number
): Promise<VacancyDetailResponse> => {
  const response = await client.get<VacancyDetailResponse>(
    `/school-job-vacancies/${id}`
  );
  return response.data;
};
