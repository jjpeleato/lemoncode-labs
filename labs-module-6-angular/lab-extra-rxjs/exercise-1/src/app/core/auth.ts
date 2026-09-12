import { Service, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const VALID_CREDENTIALS = {
  username: 'master@lemoncode.net',
  password: '12345678',
};

const STORAGE_KEY = 'auth-username';

@Service()
export class Auth {
  private readonly loggedSignal = signal(this.readStoredUsername() !== null);
  private readonly usernameSignal = signal<string | null>(this.readStoredUsername());

  readonly isLogged = this.loggedSignal.asReadonly();
  readonly getUsername = this.usernameSignal.asReadonly();

  login(username: string, password: string): Observable<boolean> {
    const isValid =
      username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password;

    return of(isValid).pipe(
      delay(2000),
      tap((success) => {
        if (success) {
          this.loggedSignal.set(true);
          this.usernameSignal.set(username);
          localStorage.setItem(STORAGE_KEY, username);
        }
      }),
    );
  }

  logout(): void {
    this.loggedSignal.set(false);
    this.usernameSignal.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  private readStoredUsername(): string | null {
    return localStorage.getItem(STORAGE_KEY);
  }
}
