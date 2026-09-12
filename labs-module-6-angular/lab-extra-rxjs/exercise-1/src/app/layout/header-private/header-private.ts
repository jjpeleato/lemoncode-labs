import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-header-private',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-private.html',
  styleUrl: './header-private.scss',
})
export class HeaderPrivate {
  protected readonly auth = inject(Auth);
  private readonly router = inject(Router);

  menuToggle = output<void>();

  protected onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
