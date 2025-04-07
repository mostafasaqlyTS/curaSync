export interface FileDownloadResponse {
  download_url: string;
}

export interface DeleteFileRequest {
  user_id: string;
  file_id: string;
}

export interface FileUploaderInfo {
  filename: string;
  result_type: string;
  file_size: number;
  testRef: string;
  upload_date: string;
  uploader_first_name: string;
  uploader_last_name: string;
}

export interface UpdateFileStatusRequest {
  accept_file: boolean;
  id_file: string;
}
