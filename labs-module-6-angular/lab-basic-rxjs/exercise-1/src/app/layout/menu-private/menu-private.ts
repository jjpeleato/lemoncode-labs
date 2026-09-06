import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu-private',
  imports: [RouterLink, RouterLinkActive, MatListModule],
  templateUrl: './menu-private.html',
  styleUrl: './menu-private.scss',
})
export class MenuPrivate {}
