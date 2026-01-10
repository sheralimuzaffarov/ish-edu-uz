import { VacancyFilters } from "@/entities/vacancy/model/types";

export function updateURLParams(filters: VacancyFilters) {
  const params = new URLSearchParams();
  
  if (filters.region_id) params.set('region_id', filters.region_id.toString());
  if (filters.rayon_id) params.set('rayon_id', filters.rayon_id.toString());
  if (filters.school_id) params.set('school_id', filters.school_id.toString());
  if (filters.position_level_id) params.set('position_level_id', filters.position_level_id.toString());
  if (filters.position_id) params.set('position_id', filters.position_id.toString());
  if (filters.page && filters.page > 1) params.set('page', filters.page.toString());
  if (filters.pageSize && filters.pageSize !== 20) params.set('pageSize', filters.pageSize.toString());
  
  const newURL = params.toString() 
    ? `${window.location.pathname}?${params.toString()}`
    : window.location.pathname;
  
  window.history.pushState({}, '', newURL);
}

export function getFiltersFromURL(): Partial<VacancyFilters> {
  const params = new URLSearchParams(window.location.search);
  const filters: Partial<VacancyFilters> = {};
  
  const regionId = params.get('region_id');
  if (regionId) filters.region_id = parseInt(regionId);
  
  const rayonId = params.get('rayon_id');
  if (rayonId) filters.rayon_id = parseInt(rayonId);
  
  const schoolId = params.get('school_id');
  if (schoolId) filters.school_id = parseInt(schoolId);
  
  const positionLevelId = params.get('position_level_id');
  if (positionLevelId) filters.position_level_id = parseInt(positionLevelId);
  
  const positionId = params.get('position_id');
  if (positionId) filters.position_id = parseInt(positionId);
  
  const page = params.get('page');
  if (page) filters.page = parseInt(page);
  
  const pageSize = params.get('pageSize');
  if (pageSize) filters.pageSize = parseInt(pageSize);
  
  return filters;
}
