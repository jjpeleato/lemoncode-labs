import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-public',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header-public.html',
  styleUrl: './header-public.scss',
})
export class HeaderPublic {}
