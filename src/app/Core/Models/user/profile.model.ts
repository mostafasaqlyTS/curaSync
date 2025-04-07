export interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  adress: string;
  session_number: string;
}

export interface FileInfo {
  file_id: string;
  file_name: string;
  file_path: string;
}

export interface CheckedUser extends UserProfile {
  files: FileInfo[];
}
