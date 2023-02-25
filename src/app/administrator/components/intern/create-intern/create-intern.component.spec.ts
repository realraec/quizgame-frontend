import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternComponent } from './create-intern.component';

describe('CreateInternComponent', () => {
  let component: CreateInternComponent;
  let fixture: ComponentFixture<CreateInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
