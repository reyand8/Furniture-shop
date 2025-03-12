export interface IProfile {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  createdAt: string;
  contactInfo: IContactInfo[] | null;
}

export interface IContactInfo {
  id: number;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
  companyName?: string;
}

export interface IUpdateProfile {
  id?: number,
  email?: string,
  firstName?: string,
  lastName?: string,
}

export interface IUpdateProfileInfo {
  id?: number,
  email?: string,
  firstName?: string,
  lastName?: string,
  phone?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  region?: string;
  country?: string;
  companyName?: string;
}

export interface ICreateProfileInfo {
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
  companyName?: string;
}
