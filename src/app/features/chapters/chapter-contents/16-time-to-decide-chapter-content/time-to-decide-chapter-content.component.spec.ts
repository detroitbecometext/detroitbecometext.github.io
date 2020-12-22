import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeToDecideChapterContentComponent } from './time-to-decide-chapter-content.component';

describe('TimeToDecideChapterContentComponent', () => {
  let component: TimeToDecideChapterContentComponent;
  let fixture: ComponentFixture<TimeToDecideChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeToDecideChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeToDecideChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
