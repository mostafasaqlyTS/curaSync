import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileRequest } from '../Models/file/upload-file.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  uploadToSql(data: UploadFileRequest): Observable<any> {
    const formData = new FormData();

    formData.append('phone_number', data.phone_number);
    formData.append('country_code', data.country_code);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('birthday', data.birthday);
    formData.append('id_of_uploader', data.id_of_uploader);

    data.resultDate.forEach((val, i) => formData.append(`resultDate[${i}]`, val));
    data.selectedLabTest.forEach((val, i) => formData.append(`selectedLabTest[${i}]`, val));
    data.resultType.forEach((val, i) => formData.append(`resultType[${i}]`, val));
    data.files.forEach(file => formData.append('files', file));

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
}
