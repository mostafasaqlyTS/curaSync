import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DeleteFileRequest,
  FileDownloadResponse
} from '../Models/file/file.model';
import { ChatbotImageResponse } from '../Models/chatbot/chatbot.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  deleteFileIfPatient(data: DeleteFileRequest, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/deleteFileIfPatient`, data);
  }

  downloadFile(id_file: string, token: string): Observable<FileDownloadResponse> {
    return this.http.get<FileDownloadResponse>(`${this.baseUrl}/download/${id_file}`);
  }


  uploadImageToChatbot(
    image: File,
    id_file: string,
    text: string,
    session_number: string,
    token: string
  ): Observable<ChatbotImageResponse> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('id_file', id_file);
    formData.append('text', text);
    formData.append('session_number', session_number);

    return this.http.post<ChatbotImageResponse>(
      `${this.baseUrl}/chatbotwithImage`,
      formData
    );
  }
  // Upload File
  uploadFile(baseUrl: string, file: File, additionalData?: Record<string, any>): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    if (additionalData) {
      for (const [key, value] of Object.entries(additionalData)) {
        formData.append(key, value);
      }
    }

    return this.http.post(`${baseUrl}/upload`, formData);
  }


  // Get File List
  getFileList(baseUrl: string, params?: Record<string, string>): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    return this.http.get(`${baseUrl}/list`, { params: httpParams });
  }
}
