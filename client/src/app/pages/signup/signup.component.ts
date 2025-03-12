import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  AbstractControl, FormControl, FormGroup,
  ReactiveFormsModule, ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { ISignupForm} from './signup.interface';
import {ISignup, ITokenResponse} from '../../auth/auth.interface';
import {
  getEmailError, getFirstNameError,
  getLastNameError, getPasswordError,
  hasPasswordMismatch
} from '../../helpers/validation/form-validation';


@Component({
  selector: 'app-signup',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  submitted: boolean = false;
  errorMessage:  WritableSignal<string> = signal<string>('')

  form: FormGroup<ISignupForm> = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.maxLength(60)]),
      firstName: new FormControl('', [Validators.required,
        Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required,
        Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    { validators: (control) => this.passwordMatchValidator(control) }
  );


  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword
      ? { passwordMismatch: true }
      : null;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.errorMessage.set("Please fill in all fields correctly.");
      return;
    }
    if (this.form.valid) {
      const formValue = this.form.value;
      delete formValue.confirmPassword;
      const payload: Required<ISignup> = formValue as Required<ISignup>;
      this.authService.signup(payload).subscribe({
        next: (res: ITokenResponse): void => {
          this.router.navigate(['']);
        },
        error: (err): void => {
          if (err.status.status === 400) {
            this.errorMessage.set(err.error.message);
          } else {
            this.errorMessage.set('Unrecognized error');
          }
        },
      });
    }
    this.errorMessage.set('');
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  get emailError(): string | null {
    return getEmailError(this.form.get('email'));
  }

  get firstNameError(): string | null {
    return getFirstNameError(this.form.get('firstName'));
  }

  get lastNameError(): string | null {
    return getLastNameError(this.form.get('lastName'));
  }

  get passwordError(): string | null {
    return getPasswordError(this.form.get('password'));
  }

  get passwordMismatch(): boolean {
    return hasPasswordMismatch(this.form);
  }

}
