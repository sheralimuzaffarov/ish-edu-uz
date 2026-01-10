import { PositionLevel } from "@/entities/vacancy/model/types";

export interface PositionLevelItem {
  id: number;
  name_uz: string;
  name_ru: string;
  name_kz: string;
  name_en: string;
  created_at: string;
  updated_at: string;
}

export interface PositionItem {
  id: number;
  position_level_id: number;
  name_uz: string;
  name_ru: string;
  name_kz: string;
  name_en: string;
  created_at: string | null;
  updated_at: string | null;
  get_level: PositionLevel;
}

export interface PositionLevelsResponse {
  data: PositionLevelItem[];
}

export interface PositionsResponse {
  data: PositionItem[];
}
