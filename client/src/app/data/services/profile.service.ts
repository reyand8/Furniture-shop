import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import {
  IUpdateProfile, IProfile,
  IUpdateProfileInfo, ICreateProfileInfo
} from '../interfaces/profile.interface';
import { environment } from '../../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient)
  baseApiUrl: string = environment.baseApiUrl;

  /**
   * Fetches the current user's profile.
   */
  getMyProfile(): Observable<IProfile | null> {
    return this.http.get<IProfile>(`${this.baseApiUrl}users/me`)
  }

  /**
   * Removes the current user's profile.
   */
  removeMyProfile(): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}users/me`)
  }

  /**
   * Updates the current user's profile.
   */
  updateMyProfile(jsonPayload: Partial<IUpdateProfile>): Observable<IUpdateProfile> {
    return this.http.patch<IUpdateProfile>(`${this.baseApiUrl}users/me`, jsonPayload);
  }

  createContactInfo(jsonPayload: ICreateProfileInfo): Observable<ICreateProfileInfo> {
    return this.http.post<ICreateProfileInfo>(`${this.baseApiUrl}users/contact-info`, jsonPayload);
  }

  updateContactInfo(jsonPayload: Partial<IUpdateProfileInfo>): Observable<IUpdateProfileInfo> {
    return this.http.patch<IUpdateProfileInfo>(`${this.baseApiUrl}users/contact-info`, jsonPayload);
  }
}
