import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Crud } from './pages/crud/crud';
import { Dashboard } from './pages/dashboard/dashboard';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard },
  { path: 'gallery', component: Gallery },
  { path: 'crud', component: Crud },
  { path: 'profile', component: Profile },
];
