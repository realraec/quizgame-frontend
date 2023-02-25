import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInternComponent } from './list-intern.component';

describe('ListStagiairesComponent', () => {
  let component: ListInternComponent;
  let fixture: ComponentFixture<ListInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
