import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPositionLevels } from "@/entities/position/api/positions";
import { PositionLevelItem } from "@/entities/position/model/types";
import { useFilterStore } from "../model/store";
import * as Icons from "@radix-ui/react-icons";

export function PositionLevelSelect() {
  const { t } = useTranslation();
  const [levels, setLevels] = useState<PositionLevelItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { positionLevelId, setPositionLevelId } = useFilterStore();

  useEffect(() => {
    const loadLevels = async () => {
      try {
        const response = await getPositionLevels();
        setLevels(response.data);
      } catch (error) {
        console.error("Failed to load position levels:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLevels();
  }, []);

  return (
    <div>
      <Select.Root
        value={positionLevelId?.toString() || undefined}
        onValueChange={(value) =>
          setPositionLevelId(value ? parseInt(value) : null)
        }
        disabled={isLoading}
      >
        <Select.Trigger className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base">
          <Select.Value placeholder={t('filters.positionLevel')} />
          <Select.Icon>
            <Icons.ChevronDownIcon className="w-4 h-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-[300px] overflow-y-auto">
            <Select.Viewport className="p-1">
              {levels.map((level) => (
                <Select.Item
                  key={level.id}
                  value={level.id.toString()}
                  className="relative flex items-center px-6 sm:px-8 py-2 rounded-sm hover:bg-gray-100 focus:bg-gray-100 outline-none cursor-pointer text-sm sm:text-base"
                >
                  <Select.ItemText>{level.name_uz}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2">
                    <Icons.CheckIcon className="w-4 h-4" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
