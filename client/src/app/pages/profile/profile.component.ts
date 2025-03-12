import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, of, Subject, takeUntil, tap } from 'rxjs';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { IContactInfo, ICreateProfileInfo, IProfile } from '../../data/interfaces/profile.interface';
import { IProfileDetailsForm, IProfileMainForm } from './profile.interface';
import { EU_COUNTRIES } from '../../helpers/utils/countries';
import {
  getAddressError, getCityError, getCompanyNameError, getCountryError,
  getEmailError, getFirstNameError, getLastNameError, getPhoneError,
  getPostalCodeError, getRegionError
} from '../../helpers/validation/form-validation';
import { ProfileService } from '../../data/services/profile.service';
import { AuthService } from '../../auth/auth.service';
import { ModalDeleteProfileComponent }
  from '../../common-ui/modal-delete-profile/modal-delete-profile.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgIf,
    ModalDeleteProfileComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileService: ProfileService = inject(ProfileService)
  authService: AuthService = inject(AuthService)
  private unsubscribe$: Subject<void> = new Subject<void>();

  countries: {code: string, name: string}[] = EU_COUNTRIES;
  profile: IProfile | null = null;

  mainInfoUpdated: boolean = false;
  detailsUpdated: boolean = false;
  showModalWindow: WritableSignal<boolean> = signal<boolean>(false)

  ngOnInit(): void {
    this.loadProfile();
  }

  private loadProfile(): void {
    this.profileService.getMyProfile().pipe(
      takeUntil(this.unsubscribe$),
      tap((profile: IProfile | null) => this.handleProfileResponse(profile)),
      catchError(() => {
        return of(null);
      })
    ).subscribe();
  }

  private handleProfileResponse(profile: IProfile | null): void {
    if (profile) {
      this.profile = profile;
      this.updateMainForm(profile);
      this.updateDetailsForm(profile);
    }
  }

  private updateMainForm(profile: IProfile): void {
    this.mainForm.patchValue({
      email: profile.email || '',
      firstName: profile.firstName || '',
      lastName: profile.lastName || ''
    });
  }

  private updateDetailsForm(profile: IProfile): void {
    const contactInfo: IContactInfo = profile.contactInfo?.[0] || {} as IContactInfo;
    this.detailsForm.patchValue({
      country: contactInfo.country || '',
      companyName: contactInfo.companyName || '',
      address: contactInfo.address || '',
      region: contactInfo.region || '',
      city: contactInfo.city || '',
      zipCode: contactInfo.zipCode || '',
      phone: contactInfo.phone || ''
    });
  }

  mainForm: FormGroup<IProfileMainForm> = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required,
        Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required,
        Validators.maxLength(60)]),
    }
  );

  detailsForm: FormGroup<IProfileDetailsForm> = new FormGroup(
    {
      country: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.maxLength(100)),
      address: new FormControl('', [Validators.required,
        Validators.maxLength(200)]),
      region: new FormControl('', [Validators.required,
        Validators.maxLength(100)]),
      city: new FormControl('', [Validators.required,
        Validators.maxLength(100)]),
      zipCode: new FormControl('', [Validators.required,
        Validators.maxLength(30)]),
      phone: new FormControl('', [Validators.required,
        Validators.maxLength(13)]),
    }
  );

  onMainFormSubmit(): void {
    if (this.mainForm.valid) {
      const updatedMainValues: Partial<IProfile> = this.getUpdatedValues(this.mainForm);
      if (Object.keys(updatedMainValues).length) {
        this.profileService.updateMyProfile(updatedMainValues).subscribe({
          next: (): void => {
            this.mainInfoUpdated = true;
            this.loadProfile();
            setTimeout((): boolean => this.mainInfoUpdated = false, 6000);
          },
          error: (err): void => {
            console.error('Error updating profile:', err);
          }
        });
      }
    }
  }

  onDetailsFormSubmit(): void {
    if (!this.detailsForm.valid) {
      return;
    }
    if (this.profile?.contactInfo && this.profile.contactInfo.length > 0) {
      this.updateExistingContactInfo();
    } else {
      this.createNewContactInfo();
    }
  }

  private updateExistingContactInfo(): void {
    const updatedMainValues: Partial<IProfile> = this.getUpdatedValues(this.detailsForm);
    if (Object.keys(updatedMainValues).length === 0) {
      return;
    }

    this.profileService.updateContactInfo(updatedMainValues).subscribe({
      next: () => this.handleSuccess(),
      error: (err) => this.handleError(err),
    });
  }

  private createNewContactInfo(): void {
    const payload: ICreateProfileInfo = this.detailsForm.value as ICreateProfileInfo;

    this.profileService.createContactInfo(payload).subscribe({
      next: () => this.handleSuccess(),
      error: (err) => this.handleError(err),
    });
  }

  private handleSuccess(): void {
    this.detailsUpdated = true;
    this.loadProfile();
    setTimeout((): boolean => (this.detailsUpdated = false), 6000);
  }

  private handleError(err: any): void {
    console.error('Error updating profile:', err);
  }

  private getUpdatedValues(form: FormGroup): Partial<IProfile> {
    const updatedValues: Partial<IProfile> = {};
    Object.keys(form.controls).forEach((controlName: string): void => {
      const control = form.get(controlName);
      if (control && control.dirty && control.value !== this.profile?.[controlName as keyof IProfile]) {
        updatedValues[controlName as keyof IProfile] = control.value;
      }
    });
    return updatedValues;
  }

  onLogoutClick(): void {
    this.authService.logout();
  }

  onDeleteClick(): void {
    this.openDeleteModal()
  }

  openDeleteModal(): void {
    this.showModalWindow.set(true);
  }

  closeDeleteModal(): void {
    this.showModalWindow.set(false);
  }

  get emailError(): string | null {
    return getEmailError(this.mainForm.get('email'));
  }

  get firstNameError(): string | null {
    return getFirstNameError(this.mainForm.get('firstName'));
  }

  get lastNameError(): string | null {
    return getLastNameError(this.mainForm.get('lastName'));
  }

  get companyNameError(): string | null {
    return getCompanyNameError(this.detailsForm.get('companyName'));
  }

  get addressError(): string | null {
    return getAddressError(this.detailsForm.get('address'));
  }

  get countryError(): string | null {
    return getCountryError(this.detailsForm.get('country'));
  }

  get regionError(): string | null {
    return getRegionError(this.detailsForm.get('region'));
  }

  get cityError(): string | null {
    return getCityError(this.detailsForm.get('city'));
  }
  get postalCodeError(): string | null {
    return getPostalCodeError(this.detailsForm.get('zipCode'));
  }

  get phoneError(): string | null {
    return getPhoneError(this.detailsForm.get('phone'));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
