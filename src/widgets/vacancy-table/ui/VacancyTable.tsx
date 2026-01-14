import { useTranslation } from "react-i18next";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { TableRow } from "./TableRow";
import { MobileVacancyCard } from "./MobileVacancyCard";

export function VacancyTable() {
  const { t } = useTranslation();
  const { vacancies, isLoading } = useVacancyStore();

  const cols = [
    { width: "5%", label: "ID" },
    { width: "25%", label: "Position" },
    { width: "12%", label: "Salary" },
    { width: "15%", label: "Experience" },
    { width: "10%", label: "Vacancy Hours" },
    { width: "10%", label: "Privileges" },
    { width: "10%", label: "Deadline" },
    { width: "13%", label: "Action" },
  ] as const;

  if (isLoading) {
    return (
      <div className="card mt-4">
        <div className="card-body">
          <div className="text-center py-8 text-sm sm:text-base">{t('table.loading')}</div>
        </div>
      </div>
    );
  }

  if (vacancies.length === 0) {
    return (
      <div className="card mt-4">
        <div className="card-body">
          <div className="text-center py-8 text-sm sm:text-base">{t('table.noResults')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-4">
      <div className="card-body p-3 sm:p-6">
        {/* Desktop/Tablet Table View */}
        <div className="hidden sm:block w-full overflow-x-auto">
          <table className="table table-striped table-hover w-full" style={{ tableLayout: 'fixed', minWidth: '1000px' }}>
            <colgroup>
              {cols.map((c) => (
                <col key={c.label} style={{ width: c.width }} />
              ))}
            </colgroup>
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">{t('table.id')}</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">{t('table.position')}</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">{t('table.salary')}</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm hidden md:table-cell">
                  {t('table.experience')}
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm hidden lg:table-cell">
                  {t('table.vacancyHours')}
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm hidden lg:table-cell">{t('table.privileges')}</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">{t('table.deadline')}</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">{t('table.action')}</th>
              </tr>
            </thead>
            <tbody>
              {vacancies.map((vacancy, index) => (
                <TableRow key={vacancy.id} vacancy={vacancy} rowNumber={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {vacancies.map((vacancy, index) => (
            <MobileVacancyCard key={vacancy.id} vacancy={vacancy} rowNumber={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
