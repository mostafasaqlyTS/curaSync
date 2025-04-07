import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EditReportRequest } from '../Models/report/edit-report.model';
import { HistoryDownloadResponse } from '../Models/history/history-download.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportHistoryService {
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
