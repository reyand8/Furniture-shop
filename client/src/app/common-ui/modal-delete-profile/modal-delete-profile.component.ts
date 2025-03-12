import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from '../../data/services/profile.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-modal-delete-profile',
  standalone: true,
  imports: [],
  templateUrl: './modal-delete-profile.component.html',
  styleUrl: './modal-delete-profile.component.scss'
})
export class ModalDeleteProfileComponent {
  @Output() closeModal = new EventEmitter<void>();
  profileService: ProfileService = inject(ProfileService);
  authService: AuthService = inject(AuthService);

  router: Router = inject(Router);

  onCloseClick(): void {
    this.closeModal.emit();
  }

  onDeleteClick(): void {
    this.removeMyProfile()
    this.authService.logout();
  }

  removeMyProfile() {
    this.profileService.removeMyProfile().subscribe({
      next: (): void => {
        this.router.navigate(['/']);
      },
      error: (err): void => {
        console.error('Error removing profile:', err);
      }
    });
  }

}
