import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnightTrainChapterContentComponent } from './midnight-train-chapter-content.component';

describe('MidnightTrainChapterContentComponent', () => {
  let component: MidnightTrainChapterContentComponent;
  let fixture: ComponentFixture<MidnightTrainChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidnightTrainChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidnightTrainChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
