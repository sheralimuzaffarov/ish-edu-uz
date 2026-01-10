import { useTranslation } from "react-i18next";
import { Vacancy } from "@/entities/vacancy/model/types";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { format } from "date-fns";

interface TableRowProps {
  vacancy: Vacancy;
  rowNumber: number;
}

export function TableRow({ vacancy, rowNumber }: TableRowProps) {
  const { t } = useTranslation();
  const { fetchVacancyById } = useVacancyStore();

  const handleApply = () => {
    fetchVacancyById(vacancy.id);
  };

  const formatSalary = (salary: string) => {
    if (salary === "0" || salary === "Kelishiladi") {
      return t('common.negotiable');
    }
    return `${parseInt(salary).toLocaleString()} ${t('common.currency')}`;
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy-MM-dd");
    } catch {
      return dateString;
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-2 sm:px-4 py-2 sm:py-3 text-primary-dark font-medium text-xs sm:text-sm">{rowNumber}</td>
      <td 
        className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm table-cell-truncate"
        title={vacancy.position.name}
      >
        {vacancy.position.name}
      </td>
      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">{formatSalary(vacancy.salary)}</td>
      <td 
        className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden md:table-cell table-cell-truncate" 
        title={vacancy.work_experience.name}
      >
        {vacancy.work_experience.name}
      </td>
      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell text-center whitespace-nowrap">{vacancy.vacancy_count}</td>
      <td 
        className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell table-cell-truncate" 
        title={vacancy.privileges || undefined}
      >
        {vacancy.privileges || "-"}
      </td>
      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">{formatDate(vacancy.deadline)}</td>
      <td className="px-2 sm:px-4 py-2 sm:py-3">
        <button
          onClick={handleApply}
          className="bg-primary-dark text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm hover:bg-primary-dark/90 transition-colors w-full sm:w-[140px] h-8 sm:h-9 whitespace-nowrap"
        >
          {t('table.apply')}
        </button>
      </td>
    </tr>
  );
}
