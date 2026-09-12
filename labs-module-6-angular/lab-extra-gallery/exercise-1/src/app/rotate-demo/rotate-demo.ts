import { Component } from '@angular/core';
import { Rotate } from '../directives/rotate';

@Component({
  selector: 'app-rotate-demo',
  imports: [Rotate],
  templateUrl: './rotate-demo.html',
  styleUrl: './rotate-demo.scss',
})
export class RotateDemo {}
