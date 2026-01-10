import { create } from "zustand";
import { VacancyFilters } from "@/entities/vacancy/model/types";

interface FilterState {
  regionId: number | null;
  rayonId: number | null;
  schoolId: number | null;
  positionLevelId: number | null;
  positionId: number | null;
  setRegionId: (id: number | null) => void;
  setRayonId: (id: number | null) => void;
  setSchoolId: (id: number | null) => void;
  setPositionLevelId: (id: number | null) => void;
  setPositionId: (id: number | null) => void;
  resetFilters: () => void;
  getFilterParams: () => VacancyFilters;
  initializeFromURL: (filters: Partial<VacancyFilters>) => void;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  regionId: null,
  rayonId: null,
  schoolId: null,
  positionLevelId: null,
  positionId: null,
  setRegionId: (id) => {
    set({ regionId: id, rayonId: null, schoolId: null });
  },
  setRayonId: (id) => {
    set({ rayonId: id, schoolId: null });
  },
  setSchoolId: (id) => set({ schoolId: id }),
  setPositionLevelId: (id) => {
    set({ positionLevelId: id, positionId: null });
  },
  setPositionId: (id) => set({ positionId: id }),
  resetFilters: () =>
    set({
      regionId: null,
      rayonId: null,
      schoolId: null,
      positionLevelId: null,
      positionId: null,
    }),
  getFilterParams: () => {
    const state = get();
    const params: VacancyFilters = {
      page: 1,
      pageSize: 20,
    };
    if (state.regionId) params.region_id = state.regionId;
    if (state.rayonId) params.rayon_id = state.rayonId;
    if (state.schoolId) params.school_id = state.schoolId;
    if (state.positionLevelId) params.position_level_id = state.positionLevelId;
    if (state.positionId) params.position_id = state.positionId;
    return params;
  },
  initializeFromURL: (filters) => {
    set({
      regionId: filters.region_id || null,
      rayonId: filters.rayon_id || null,
      schoolId: filters.school_id || null,
      positionLevelId: filters.position_level_id || null,
      positionId: filters.position_id || null,
    });
  },
}));
