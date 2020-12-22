import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnorsLastMissionChapterContentComponent } from './connors-last-mission-chapter-content.component';

describe('ConnorsLastMissionChapterContentComponent', () => {
  let component: ConnorsLastMissionChapterContentComponent;
  let fixture: ComponentFixture<ConnorsLastMissionChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnorsLastMissionChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnorsLastMissionChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
