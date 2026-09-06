import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderPublic } from './layout/header-public/header-public';
import { HeaderPrivate } from './layout/header-private/header-private';
import { MenuPublic } from './layout/menu-public/menu-public';
import { MenuPrivate } from './layout/menu-private/menu-private';
import { Footer } from './layout/footer/footer';
import { Auth } from './core/auth';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderPublic,
    HeaderPrivate,
    MenuPublic,
    MenuPrivate,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly auth = inject(Auth);
  protected menuOpen = false;
}
