export interface LoginRequest {
  phone_number: string;
  country_code: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: string;
  role: string;
}
