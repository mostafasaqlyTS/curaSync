import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploaderInfo, UpdateFileStatusRequest } from '../Models/file/file.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateFileStatus(data: UpdateFileStatusRequest, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/update-file-status`, data, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
    });
  }

  getAllFilesUsers(): Observable<FileUploaderInfo[]> {
    return this.http.get<FileUploaderInfo[]>(`${this.baseUrl}/getAllFilesUsers`);
  }
}
