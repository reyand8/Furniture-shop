import { catchError, Observable, tap, throwError } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ILogin, ISignup, ITokenResponse } from './auth.interface';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router)
  cookieService: CookieService = inject(CookieService)
  baseApiUrl: string = environment.baseApiUrl;
  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('token')
      this.refreshToken = this.cookieService.get('refreshToken')
    }
    return !!this.token
  }

  signup(payload: ISignup): Observable<ITokenResponse> {
    return this.sendSignupRequest(payload);
  }

  sendSignupRequest(jsonPayload: ISignup): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>(`${this.baseApiUrl}auth/register`, jsonPayload).pipe(
      tap((val: ITokenResponse) => this.saveTokens(val)),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  login(payload: ILogin): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>(`${this.baseApiUrl}auth/login`, payload).pipe(
      tap((val: ITokenResponse): void => {
        this.saveTokens(val);
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  logout(): void {
    this.cookieService.deleteAll()
    this.token = null
    this.refreshToken = null
    this.router.navigate(['/'])
  }

  saveTokens(res: ITokenResponse): void {
    this.token =  res.access_token
    this.refreshToken = res.refresh_token
    this.cookieService.set('token', this.token)
    this.cookieService.set('refreshToken', this.refreshToken)
  }

  refreshAuthToken(): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>(`${this.baseApiUrl}auth/token`, {
      refresh_token: this.refreshToken,
    }).pipe(
      tap((res: ITokenResponse): void => {
        this.saveTokens(res)
      }),
      catchError(err => {
        this.logout()
        return throwError(err)
      })
    )
  }
}
