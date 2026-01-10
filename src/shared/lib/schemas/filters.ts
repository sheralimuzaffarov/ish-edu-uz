import { z } from "zod";

export const vacancyFiltersSchema = z.object({
  region_id: z.number().optional(),
  rayon_id: z.number().optional(),
  school_id: z.number().optional(),
  position_level_id: z.number().optional(),
  position_id: z.number().optional(),
  page: z.number().min(1).default(1),
  pageSize: z.number().min(1).max(100).default(20),
});

export type VacancyFiltersInput = z.infer<typeof vacancyFiltersSchema>;
