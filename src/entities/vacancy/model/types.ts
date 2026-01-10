import { Region, Rayon } from "@/entities/region/model/types";
import { School } from "@/entities/school/model/types";

export interface PositionLevel {
  id: number;
  name: string;
}

export interface Position {
  id: number;
  name: string;
  position_level_id?: number;
  get_level?: PositionLevel;
}

export interface LessonLanguage {
  id: number;
  name: string;
}

export interface WorkExperience {
  id: number;
  name: string;
}

export interface Education {
  id: number;
  name: string;
}

export interface JobType {
  id: number;
  name: string;
}

export interface PaymentType {
  id: number;
  name: string;
}

export interface WorkplaceEmployment {
  id: number;
  name: string;
}

export interface Vacancy {
  id: number;
  region_id: number;
  rayon_id: number;
  school_id: number;
  position_level_id: number;
  position_id: number;
  lesson_language_id: number;
  lesson_language_id2: number | null;
  work_experience_id: number;
  education_id: number | null;
  job_type_id: number;
  payment_type_id: number;
  vacancy_count: number;
  workplace_employment_id: number | null;
  salary: string;
  privileges: string | null;
  deadline: string;
  contact_number: string;
  description: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  applications_count: number;
  accepted_applications_count: number;
  position_level: PositionLevel;
  position: Position;
  lesson_language: LessonLanguage;
  language: LessonLanguage;
  language2: LessonLanguage | null;
  work_experience: WorkExperience;
  education: Education | null;
  job_type: JobType;
  payment_type: PaymentType;
  workplace_employment: WorkplaceEmployment | null;
}

export interface VacancyDetail extends Vacancy {
  region: Region;
  rayon: Rayon;
  school: School;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  data: Vacancy[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface VacanciesResponse {
  data: PaginationMeta;
}

export interface VacancyDetailResponse {
  data: VacancyDetail;
}

export interface VacancyFilters {
  region_id?: number;
  rayon_id?: number;
  school_id?: number;
  position_level_id?: number;
  position_id?: number;
  page?: number;
  pageSize?: number;
}
