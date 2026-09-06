import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrivate } from './menu-private';

describe('MenuPrivate', () => {
  let component: MenuPrivate;
  let fixture: ComponentFixture<MenuPrivate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrivate],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrivate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
