import { useTranslation } from "react-i18next";
import { useFilterStore } from "../model/store";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { updateURLParams } from "@/shared/lib/utils/urlSync";

export function FilterActions() {
  const { t } = useTranslation();
  const { getFilterParams, resetFilters } = useFilterStore();
  const { fetchVacancies } = useVacancyStore();

  const handleSearch = async () => {
    const params = getFilterParams();
    updateURLParams({ ...params, page: 1 }); // Reset to page 1 on new search
    await fetchVacancies({ ...params, page: 1 });
  };

  const handleClear = () => {
    resetFilters();
    updateURLParams({ page: 1, pageSize: 20 });
    fetchVacancies({ page: 1, pageSize: 20 });
  };

  return (
    <div className="mt-4 sm:mt-6 flex justify-end">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
        <button
          onClick={handleSearch}
          className="bg-yellow-400 text-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full sm:w-[150px] text-sm sm:text-base"
        >
          {t('filters.search')}
        </button>
        <button
          onClick={handleClear}
          className="bg-primary-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors w-full sm:w-[150px] text-sm sm:text-base"
        >
          {t('filters.clear')}
        </button>
      </div>
    </div>
  );
}
