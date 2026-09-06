import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu-public',
  imports: [RouterLink, RouterLinkActive, MatListModule],
  templateUrl: './menu-public.html',
  styleUrl: './menu-public.scss',
})
export class MenuPublic {}
