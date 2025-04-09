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


export const countries = [
  {
    name: 'EG',
    longName: 'Egypt',
    code: '+20',
    flagIcon: 'assets/icons/flags/egypt.png',
    phoneRegex: /^0?(10|11|12|15|17)\d{8}$/,
  },
  {
    name: 'SA',
    longName: 'Saudi Arabia',
    code: '+966',
    flagIcon: 'assets/icons/flags/saudi-arabia.png',
    phoneRegex: /^(0?5\d{8})$/,
  },
  {
    name: 'UAE',
    longName: 'United Arab Emitites',
    code: '+971',
    flagIcon: 'assets/icons/flags/united-arab-emirates.png',
    phoneRegex: /^(0?5[0245689]\d{7})$/,
  },
]