export interface School {
  organizationid: number;
  organizationshortname: string;
  organizationfullname: string;
  inn: string;
  oblastid: number;
  oblastname: string;
  regionid: number;
  regionname: string;
  organizationtypeid: number;
  organizationtypename: string;
  adress: string;
  director: string;
  contactinfo: string;
  latitude: number;
  longitude: number;
}

export interface SchoolsResponse {
  data: School[];
}
