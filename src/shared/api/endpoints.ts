const BASE_URL = "https://ish.uzedu.uz/api/api";

export const endpoints = {
  vacancies: `${BASE_URL}/school-job-vacancies`,
  vacancyDetail: (id: number) => `${BASE_URL}/school-job-vacancies/${id}`,
  regions: `${BASE_URL}/erp-regions`,
  rayons: (regionId: number) => `${BASE_URL}/erp-rayons/${regionId}`,
  schools: `${BASE_URL}/erp-schools`,
  positionLevels: `${BASE_URL}/position/levels`,
  positions: `${BASE_URL}/position/index`,
} as const;
