import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Doctor, Lab, Patient, UpdateUserRequest } from '../Models/user/user.model';
import { LoginRequest, LoginResponse } from '../Models/auth/login.model';
import { CheckedUser, UserProfile } from '../Models/user/profile.model';
import { ReceiptRequest } from '../Models/receipt/receipt.model';

import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private signup<T>(endpoint: string, payload: T): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, payload);
  }

  signupPatient(patient: Patient): Observable<any> {
    return this.signup('singupPatient', patient);
  }

  signupDoctor(doctor: Doctor): Observable<any> {
    return this.signup('singupDoctor', doctor);
  }

  signupLab(lab: Lab): Observable<any> {
    return this.signup('singup', lab);
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data);
  }

  getUserProfileByToken(token: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      `${this.baseUrl}/getUserProfileByToken/${token}`
    );
  }

  checkUserByPhoneNumber(phone: string, code: string): Observable<CheckedUser> {
    return this.http.get<CheckedUser>(
      `${this.baseUrl}/checkUserByPhoneNumber?phone_number=${phone}&country_code=${code}`
    );
  }
  updateUserProfile(user: UpdateUserRequest, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/UpdateUserProfile`, user);
  }


  // using some custom logic to get the user from local storage
  private currentUser: any = null;

  public setUser(user: any): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): any {
    if (this.currentUser) return this.currentUser;
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  public logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
  public setAuthData(token: string, user: any): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }
  public getToken(): string | null {
    return localStorage.getItem('authToken');
  }




}
