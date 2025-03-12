import {FormControl} from '@angular/forms';

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
