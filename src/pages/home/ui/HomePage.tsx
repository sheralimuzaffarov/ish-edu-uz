import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/header/ui/Header";
import { RegionSelect } from "@/features/filters/ui/RegionSelect";
import { RayonSelect } from "@/features/filters/ui/RayonSelect";
import { SchoolSelect } from "@/features/filters/ui/SchoolSelect";
import { PositionLevelSelect } from "@/features/filters/ui/PositionLevelSelect";
import { PositionSelect } from "@/features/filters/ui/PositionSelect";
import { FilterActions } from "@/features/filters/ui/FilterActions";
import { VacancyTable } from "@/widgets/vacancy-table/ui/VacancyTable";
import { Pagination } from "@/widgets/pagination/ui/Pagination";
import { VacancyDetailModal } from "@/widgets/vacancy-detail/ui/VacancyDetailModal";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { useFilterStore } from "@/features/filters/model/store";
import { getFiltersFromURL, updateURLParams } from "@/shared/lib/utils/urlSync";

export function HomePage() {
  const { t } = useTranslation();
  const { fetchVacancies } = useVacancyStore();
  const { initializeFromURL } = useFilterStore();

  useEffect(() => {
    // Read filters and pagination from URL on initial load
    const urlFilters = getFiltersFromURL();
    
    // Initialize filter store from URL
    initializeFromURL(urlFilters);
    
    // Prepare filters for API call - use URL params or defaults
    const finalFilters = {
      page: urlFilters.page || 1,
      pageSize: urlFilters.pageSize || 20,
      ...(urlFilters.region_id && { region_id: urlFilters.region_id }),
      ...(urlFilters.rayon_id && { rayon_id: urlFilters.rayon_id }),
      ...(urlFilters.school_id && { school_id: urlFilters.school_id }),
      ...(urlFilters.position_level_id && { position_level_id: urlFilters.position_level_id }),
      ...(urlFilters.position_id && { position_id: urlFilters.position_id }),
    };
    
    // Sync URL if needed (in case some params are missing)
    if (Object.keys(urlFilters).length > 0 || finalFilters.page > 1) {
      updateURLParams(finalFilters);
    }
    
    // Fetch vacancies with URL params or defaults
    fetchVacancies(finalFilters);
  }, [fetchVacancies, initializeFromURL]); // Only run on mount (store actions are stable)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <li>{t('breadcrumb.home')}</li>
            <li>/</li>
            <li>{t('breadcrumb.vacancyIndex')}</li>
          </ol>
        </nav>

        {/* Filter Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div>
              <RegionSelect />
              <RayonSelect />
              <SchoolSelect />
            </div>

            {/* Right Column */}
            <div>
              <PositionLevelSelect />
              <PositionSelect />
            </div>
          </div>

          <FilterActions />
        </div>

        {/* Results Table */}
        <VacancyTable />

        {/* Pagination */}
        <Pagination />

        {/* Detail Modal */}
        <VacancyDetailModal />
      </div>
    </div>
  );
}
