import { Routes } from '@angular/router';
import { Gallery } from './gallery/gallery';
import { RotateDemo } from './rotate-demo/rotate-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: Gallery },
  { path: 'rotate', component: RotateDemo },
];
