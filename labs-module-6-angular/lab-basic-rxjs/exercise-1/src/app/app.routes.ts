import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';
import { loggedGuard } from './core/logged-guard';
import { About } from './pages/about/about';
import { Dashboard } from './pages/dashboard/dashboard';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login, canActivate: [loggedGuard] },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'gallery', component: Gallery, canActivate: [authGuard] },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
];
