import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-private',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header-private.html',
  styleUrl: './header-private.scss',
})
export class HeaderPrivate {}
