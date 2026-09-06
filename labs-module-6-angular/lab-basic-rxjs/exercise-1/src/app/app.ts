import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
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
