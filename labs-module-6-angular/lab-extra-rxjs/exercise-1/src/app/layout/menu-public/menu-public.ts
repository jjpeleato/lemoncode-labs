import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-public',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-public.html',
  styleUrl: './menu-public.scss',
})
export class MenuPublic {}
