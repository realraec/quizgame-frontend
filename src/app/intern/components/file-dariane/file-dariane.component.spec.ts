import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDarianeComponent } from './file-dariane.component';

describe('FileDarianeComponent', () => {
  let component: FileDarianeComponent;
  let fixture: ComponentFixture<FileDarianeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDarianeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDarianeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
