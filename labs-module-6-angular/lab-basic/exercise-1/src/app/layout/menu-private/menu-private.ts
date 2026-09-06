import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-private',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-private.html',
  styleUrl: './menu-private.scss',
})
export class MenuPrivate {}
