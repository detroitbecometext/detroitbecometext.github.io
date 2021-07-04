import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceGroupComponent } from './choice-group.component';

describe('ChoiceGroupComponent', () => {
  let component: ChoiceGroupComponent;
  let fixture: ComponentFixture<ChoiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
