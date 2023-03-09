import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInternComponent } from './navbar-intern.component';

describe('NavbarInternComponent', () => {
  let component: NavbarInternComponent;
  let fixture: ComponentFixture<NavbarInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
