import { create } from "zustand";
import { getVacancies, getVacancyById } from "../api/vacancies";
import {
  Vacancy,
  VacancyDetail,
  PaginationMeta,
  VacancyFilters,
} from "./types";

interface VacancyState {
  vacancies: Vacancy[];
  pagination: PaginationMeta | null;
  selectedVacancy: VacancyDetail | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  fetchVacancies: (filters?: VacancyFilters) => Promise<void>;
  fetchVacancyById: (id: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
  clearSelectedVacancy: () => void;
}

export const useVacancyStore = create<VacancyState>((set) => ({
  vacancies: [],
  pagination: null,
  selectedVacancy: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  fetchVacancies: async (filters) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getVacancies(filters);
      set({
        vacancies: response.data.data,
        pagination: response.data,
        isLoading: false,
        currentPage: response.data.current_page,
      });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch vacancies",
        isLoading: false,
      });
    }
  },
  fetchVacancyById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getVacancyById(id);
      set({
        selectedVacancy: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch vacancy details",
        isLoading: false,
      });
    }
  },
  setCurrentPage: (page) => set({ currentPage: page }),
  clearSelectedVacancy: () => set({ selectedVacancy: null }),
}));
