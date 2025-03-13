import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { ILoginForm, ILoginPayload } from './login.interface';
import { ITokenResponse } from '../../auth/auth.interface';
import {getEmailError, getPasswordError} from "../../helpers/validation/form-validation";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  errorMessage:  WritableSignal<string> = signal<string>('')

  form: FormGroup<ILoginForm> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,
      Validators.maxLength(60)]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(6)]),
  });

  onSubmit(): void {
    console.log(this.form)
    if (this.form.valid) {

      const payload: ILoginPayload = this.form.value as ILoginPayload;
      this.authService.login(payload).subscribe({
        next: (res: ITokenResponse): void => {
          this.router.navigate(['']);
        },
        error: (err): void => {
          console.log(err)
          if (err.status === 401) {
            this.errorMessage.set(err.error.message);
          } else {
            this.errorMessage.set('Unrecognized error');
          }
        },
      });
    }
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  get emailError(): string | null {
    return getEmailError(this.form.get('email'));
  }

  get passwordError(): string | null {
    return getPasswordError(this.form.get('password'));
  }
}
