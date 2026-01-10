import { useTranslation } from "react-i18next";
import { Vacancy } from "@/entities/vacancy/model/types";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { format } from "date-fns";

interface MobileVacancyCardProps {
  vacancy: Vacancy;
  rowNumber: number;
}

export function MobileVacancyCard({ vacancy, rowNumber }: MobileVacancyCardProps) {
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
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <span className="text-primary-dark font-semibold text-sm">#{rowNumber}</span>
        <span className="text-xs text-gray-500">{formatDate(vacancy.deadline)}</span>
      </div>
      
      <h3 className="font-semibold text-sm mb-2">{vacancy.position.name}</h3>
      
      <div className="space-y-2 text-xs mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">{t('table.salary')}:</span>
          <span className="font-medium">{formatSalary(vacancy.salary)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">{t('table.experience')}:</span>
          <span>{vacancy.work_experience.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">{t('table.vacancyHours')}:</span>
          <span>{vacancy.vacancy_count}</span>
        </div>
        {vacancy.privileges && (
          <div className="flex justify-between">
            <span className="text-gray-600">{t('table.privileges')}:</span>
            <span>{vacancy.privileges}</span>
          </div>
        )}
      </div>
      
      <button
        onClick={handleApply}
        className="w-full bg-primary-dark text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-dark/90 transition-colors"
      >
        {t('table.apply')}
      </button>
    </div>
  );
}
