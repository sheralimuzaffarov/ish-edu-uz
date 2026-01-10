import { useVacancyStore } from "@/entities/vacancy/model/store";
import { useFilterStore } from "@/features/filters/model/store";
import { updateURLParams } from "@/shared/lib/utils/urlSync";

export function Pagination() {
  const { pagination, isLoading } = useVacancyStore();
  const { getFilterParams } = useFilterStore();
  const { fetchVacancies } = useVacancyStore();

  if (!pagination || isLoading) {
    return null;
  }

  const handlePageChange = async (page: number) => {
    const params = getFilterParams();
    const filtersWithPage = { ...params, page };
    updateURLParams(filtersWithPage);
    await fetchVacancies(filtersWithPage);
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    const currentPage = pagination.current_page;
    const lastPage = pagination.last_page;

    if (lastPage <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (currentPage <= 4) {
        // Show pages 2-5, then ellipsis, then last
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(lastPage);
      } else if (currentPage >= lastPage - 3) {
        // Show first, ellipsis, then last 5 pages
        pages.push("...");
        for (let i = lastPage - 4; i <= lastPage; i++) {
          pages.push(i);
        }
      } else {
        // Show first, ellipsis, current-1, current, current+1, ellipsis, last
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(lastPage);
      }
    }

    return pages;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="flex justify-center sm:justify-end mt-3 sm:mt-4">
      <ul className="pagination flex gap-1 sm:gap-2 list-none flex-wrap justify-center">
        <li>
          <button
            onClick={() => handlePageChange(pagination.current_page - 1)}
            disabled={!pagination.prev_page_url}
            className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            ‹
          </button>
        </li>
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`}>
                <span className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base">...</span>
              </li>
            );
          }
          const pageNum = page as number;
          const isActive = pageNum === pagination.current_page;
          return (
            <li key={pageNum}>
              <button
                onClick={() => handlePageChange(pageNum)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 border rounded text-sm sm:text-base ${
                  isActive
                    ? "bg-primary-dark text-white border-primary-dark"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => handlePageChange(pagination.current_page + 1)}
            disabled={!pagination.next_page_url}
            className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            ›
          </button>
        </li>
      </ul>
    </div>
  );
}
