import { AbstractControl, FormGroup } from '@angular/forms';


export function getEmailError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Email is required.';
  if (control.hasError('email')) return 'Invalid email format.';
  if (control.hasError('maxlength')) return 'Email must be at most 60 characters.';
  return null;
}

export function getFirstNameError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'First name is required.';
  if (control.hasError('maxlength')) return 'First name must be at most 60 characters.';
  return null;
}

export function getLastNameError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Last name is required.';
  if (control.hasError('maxlength')) return 'Last name must be at most 60 characters.';
  return null;
}

export function getPasswordError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Password is required.';
  if (control.hasError('minlength')) return 'Password must be at least 6 characters.';
  return null;
}

export function hasPasswordMismatch(form: FormGroup): boolean {
  return form.hasError('passwordMismatch');
}

export function getCompanyNameError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('maxlength')) return 'Company name must be at most 100 characters.';
  return null;
}

export function getAddressError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Address is required.';
  if (control.hasError('maxlength')) return 'Address must be at most 200 characters.';
  return null;
}

export function getCountryError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Country is required.';
  return null;
}

export function getRegionError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Region is required.';
  if (control.hasError('maxlength')) return 'Region must be at most 100 characters.';
  return null;
}

export function getCityError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'City is required.';
  if (control.hasError('maxlength')) return 'City must be at most 100 characters.';
  return null;
}

export function getPostalCodeError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Zip is required.';
  if (control.hasError('maxlength')) return 'Zip must be at most 30 characters.';
  return null;
}

export function getPhoneError(control: AbstractControl | null): string | null {
  if (!control) return null;
  if (control.hasError('required')) return 'Phone number is required.';
  if (control.hasError('maxlength'))return 'Phone number must be at most 13 characters.';
  return null;
}
