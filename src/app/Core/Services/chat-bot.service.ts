import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EditReportRequest } from '../Models/report/edit-report.model';
import { HistoryDownloadResponse } from '../Models/history/history-download.model';

import { environment } from '../../../environments/environment';
import { ChatbotImageResponse } from '../Models/chatbot/chatbot.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHistoryDownload(
    session_number: string,
    token: string
  ): Observable<HistoryDownloadResponse> {
    return this.http.get<HistoryDownloadResponse>(
      `${this.baseUrl}/returnHistory/${session_number}`
    );
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

  editReport(
    data: EditReportRequest,
    token: string
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/editReport`,
      data
    );
  }
}
