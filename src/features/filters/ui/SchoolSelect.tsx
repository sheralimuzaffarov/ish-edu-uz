import * as Select from "@radix-ui/react-select";
import { useTranslation } from "react-i18next";
import { useFilterStore } from "../model/store";
import * as Icons from "@radix-ui/react-icons";

export function SchoolSelect() {
  const { t } = useTranslation();
  const { rayonId, schoolId, setSchoolId } = useFilterStore();

  // Note: The schools API endpoint is mentioned but doesn't work currently
  // This is a placeholder that can be implemented when the API is available
  if (!rayonId) {
    return null;
  }

  return (
    <div className="mt-2">
      <Select.Root
        value={schoolId?.toString() || undefined}
        onValueChange={(value) => setSchoolId(value ? parseInt(value) : null)}
        disabled={true}
      >
        <Select.Trigger className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base">
          <Select.Value placeholder={t('filters.school')} />
          <Select.Icon>
            <Icons.ChevronDownIcon className="w-4 h-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <Select.Viewport className="p-1">
              {/* No items available - API not working */}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
