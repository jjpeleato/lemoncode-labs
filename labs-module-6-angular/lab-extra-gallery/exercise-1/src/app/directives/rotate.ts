import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  numberAttribute,
  OnInit,
  signal,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class Rotate implements OnInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly rotate = input<string>('');
  readonly step = input(10, { transform: numberAttribute });

  private readonly currentAngle = signal(0);

  ngOnInit(): void {
    this.currentAngle.set(Number(this.rotate()) || 0);
    this.applyRotation();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const direction = event.shiftKey ? -1 : 1;
    this.currentAngle.update((angle) => angle + direction * this.step());
    this.applyRotation();
  }

  private applyRotation(): void {
    this.elementRef.nativeElement.style.transform = `rotate(${this.currentAngle()}deg)`;
  }
}
