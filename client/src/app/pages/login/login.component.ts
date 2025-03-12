import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { ILoginForm, ILoginPayload } from './login.interface';
import { ITokenResponse } from '../../auth/auth.interface';


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
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });

  onSubmit(): void {
    console.log(this.form)
    if (this.form.valid) {

      const payload: ILoginPayload = this.form.value as ILoginPayload;
      this.authService.login(payload).subscribe({
        next: (res: ITokenResponse) => {
          this.router.navigate(['']);
        },
        error: (err): void => {
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
}
