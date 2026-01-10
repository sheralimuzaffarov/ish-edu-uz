import * as Select from "@radix-ui/react-select";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getPositions } from "@/entities/position/api/positions";
import { PositionItem } from "@/entities/position/model/types";
import { useFilterStore } from "../model/store";
import * as Icons from "@radix-ui/react-icons";

export function PositionSelect() {
  const { t } = useTranslation();
  const [positions, setPositions] = useState<PositionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { positionLevelId, positionId, setPositionId } = useFilterStore();

  useEffect(() => {
    const loadPositions = async () => {
      try {
        const response = await getPositions();
        setPositions(response.data);
      } catch (error) {
        console.error("Failed to load positions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPositions();
  }, []);

  const filteredPositions = useMemo(() => {
    if (!positionLevelId) return positions;
    return positions.filter(
      (pos) => pos.position_level_id === positionLevelId
    );
  }, [positions, positionLevelId]);

  return (
    <div className="mt-3">
      <Select.Root
        value={positionId?.toString() || undefined}
        onValueChange={(value) => setPositionId(value ? parseInt(value) : null)}
        disabled={isLoading || !positionLevelId}
      >
        <Select.Trigger className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base">
          <Select.Value placeholder={t('filters.position')} />
          <Select.Icon>
            <Icons.ChevronDownIcon className="w-4 h-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-[300px] overflow-y-auto">
            <Select.Viewport className="p-1">
              {filteredPositions.map((position) => (
                <Select.Item
                  key={position.id}
                  value={position.id.toString()}
                  className="relative flex items-center px-6 sm:px-8 py-2 rounded-sm hover:bg-gray-100 focus:bg-gray-100 outline-none cursor-pointer text-sm sm:text-base"
                >
                  <Select.ItemText>{position.name_uz}</Select.ItemText>
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
