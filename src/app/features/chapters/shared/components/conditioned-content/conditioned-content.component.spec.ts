import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionedContentComponent } from './conditioned-content.component';

describe('ConditionedContentComponent', () => {
  let component: ConditionedContentComponent;
  let fixture: ComponentFixture<ConditionedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
