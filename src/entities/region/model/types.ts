export interface Region {
  id: number;
  countryid: number;
  nameru: string;
  nameuz: string;
  nameuzlatn: string;
  soatocode: string;
}

export interface Rayon {
  id: number;
  nameru: string;
  nameuz: string;
  nameuzlatn: string;
  oblastid: number;
  soatocode: string;
}

export interface RegionsResponse {
  data: Region[];
}

export interface RayonsResponse {
  data: Rayon[];
}
