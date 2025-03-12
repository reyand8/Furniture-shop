import { FormControl } from '@angular/forms';

export interface IProfileMainForm {
  email: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

export interface IProfileDetailsForm {
  country: FormControl<string | null>;
  companyName: FormControl<string | null>;
  address: FormControl<string | null>;
  region: FormControl<string | null>;
  city: FormControl<string | null>;
  zipCode: FormControl<string | null>;
  phone: FormControl<string | null>;
}
