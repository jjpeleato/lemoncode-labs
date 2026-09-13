import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly formBuilder = new FormBuilder();
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected readonly loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected readonly loginFailed = signal(false);
  protected readonly isLoading = signal(false);

  protected onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.getRawValue();

    this.isLoading.set(true);
    this.loginFailed.set(false);

    this.auth.login(username ?? '', password ?? '').subscribe({
      next: (isSuccess) => {
        this.isLoading.set(false);

        if (isSuccess) {
          this.router.navigate(['/dashboard']);
          return;
        }

        this.loginFailed.set(true);
      },
    });
  }
}
