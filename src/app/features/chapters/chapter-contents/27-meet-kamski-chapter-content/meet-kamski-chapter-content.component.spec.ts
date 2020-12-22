import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetKamskiChapterContentComponent } from './meet-kamski-chapter-content.component';

describe('MeetKamskiChapterContentComponent', () => {
  let component: MeetKamskiChapterContentComponent;
  let fixture: ComponentFixture<MeetKamskiChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetKamskiChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetKamskiChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
