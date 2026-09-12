import { Service, signal } from '@angular/core';

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

  login(username: string, password: string): boolean {
    const isValid =
      username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password;

    if (isValid) {
      this.loggedSignal.set(true);
      this.usernameSignal.set(username);
      localStorage.setItem(STORAGE_KEY, username);
    }

    return isValid;
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
