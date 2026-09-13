import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotateDemo } from './rotate-demo';

describe('RotateDemo', () => {
  let component: RotateDemo;
  let fixture: ComponentFixture<RotateDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotateDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RotateDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
