import { NameInfo, ContactInfo, Gendered } from '../shared/common.model';

export interface UserBase extends NameInfo, ContactInfo, Gendered {
  user_role: 'patient' | 'doctor' | 'lab';
  password: string;
  id?:string ;
}

export interface Patient extends UserBase {
  birthday: string;
  download_is_allowed: boolean;
}

export interface Doctor extends UserBase {
  specialty: string;
}

export interface Lab extends UserBase {
  address: string;
}

export interface UpdateUserRequest extends UserBase {
  id: string;
  birthday: string;
  last_four_digit: string;
  download_is_allowed: boolean;
  specialization: string;
  address: string;
}
