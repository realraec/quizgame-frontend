import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesItemsComponent } from './questionnaires-items.component';

describe('QuestionnairesItemsComponent', () => {
  let component: QuestionnairesItemsComponent;
  let fixture: ComponentFixture<QuestionnairesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnairesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnairesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
