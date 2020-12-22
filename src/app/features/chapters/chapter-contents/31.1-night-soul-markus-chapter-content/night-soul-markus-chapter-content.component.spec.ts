import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightSoulMarkusChapterContentComponent } from './night-soul-markus-chapter-content.component';

describe('NightSoulMarkusChapterContentComponent', () => {
  let component: NightSoulMarkusChapterContentComponent;
  let fixture: ComponentFixture<NightSoulMarkusChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightSoulMarkusChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightSoulMarkusChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
