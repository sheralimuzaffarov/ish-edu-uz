import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import { useVacancyStore } from "@/entities/vacancy/model/store";
import { format } from "date-fns";
import * as Icons from "@radix-ui/react-icons";

export function VacancyDetailModal() {
  const { t } = useTranslation();
  const { selectedVacancy, clearSelectedVacancy } =
    useVacancyStore();

  if (!selectedVacancy) {
    return null;
  }

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd-MM-yyyy");
    } catch {
      return dateString;
    }
  };

  const isDeadlinePassed = () => {
    try {
      const deadline = new Date(selectedVacancy.deadline);
      return deadline < new Date();
    } catch {
      return false;
    }
  };

  const formatSalary = (salary: string) => {
    if (salary === "0" || salary === "Kelishiladi") {
      return t('common.negotiable');
    }
    return `${parseInt(salary).toLocaleString()} ${t('common.currency')}`;
  };

  return (
    <Dialog.Root open={!!selectedVacancy} onOpenChange={(open) => !open && clearSelectedVacancy()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-[95%] sm:w-[90%] md:w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50 mx-2 sm:mx-4">
          <header className="bg-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-semibold">
                {t('modal.title')}
              </h3>
              <Dialog.Close asChild>
                <button className="text-white hover:text-gray-200">
                  <Icons.Cross2Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </Dialog.Close>
            </div>
          </header>
          <div className="px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-[15px] pt-4 sm:pt-8">
              <div>
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.workplace')}:{" "}
                  <span className="font-normal">
                    {selectedVacancy.region.nameuz}
                    <br />
                    {selectedVacancy.rayon.nameuz}{" "}
                    {selectedVacancy.school.organizationshortname}
                  </span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.position')}: <span className="font-normal">{selectedVacancy.position_level.name}</span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.salary')}:{" "}
                  <span className="font-normal">{formatSalary(selectedVacancy.salary)}</span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.experience')}:{" "}
                  <span className="font-normal">
                    {selectedVacancy.work_experience.name}
                  </span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.vacancyHours')}:{" "}
                  <span className="font-normal">{selectedVacancy.vacancy_count}</span>
                </p>
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.education')}:{" "}
                  <span className="font-normal">
                    {selectedVacancy.education?.name || t('common.notSpecified')}
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.jobType')}:{" "}
                  <span className="font-normal">{selectedVacancy.job_type.name}</span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.paymentType')}:{" "}
                  <span className="font-normal">{selectedVacancy.payment_type.name}</span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.employment')}:{" "}
                  <span className="font-normal">
                    {selectedVacancy.workplace_employment?.name || t('common.notSpecified')}
                  </span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.contact')}:{" "}
                  <span className="font-normal">{selectedVacancy.contact_number}</span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.publishedDate')}:{" "}
                  <span className="font-normal">
                    {formatDate(selectedVacancy.created_at)}
                  </span>
                </p>
                <br />
                <p className="font-semibold mb-3 sm:mb-4">
                  {t('modal.deadline')}:{" "}
                  <span className="font-normal">
                    {formatDate(selectedVacancy.deadline)}
                  </span>
                </p>
              </div>
            </div>
            {isDeadlinePassed() && (
              <div className="text-center mt-4 mb-4">
                <h5 className="text-red-600 font-semibold text-sm sm:text-base">
                  {t('modal.deadlinePassed')}
                </h5>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
