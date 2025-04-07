export interface UploadFileRequest {
  phone_number: string;
  country_code: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  birthday: string;
  id_of_uploader: string;
  resultDate: string[];
  selectedLabTest: string[];
  resultType: string[];
  files: File[];
}
