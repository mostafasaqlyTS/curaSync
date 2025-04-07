import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReceiptRequest } from '../Models/receipt/receipt.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUserReceipt(receipt: ReceiptRequest, token: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/createUserReceipt`,
      receipt
    );
  }
}
