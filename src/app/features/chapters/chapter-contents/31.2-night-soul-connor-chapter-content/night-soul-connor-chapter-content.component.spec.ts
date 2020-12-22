import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightSoulConnorChapterContentComponent } from './night-soul-connor-chapter-content.component';

describe('NightSoulConnorChapterContentComponent', () => {
  let component: NightSoulConnorChapterContentComponent;
  let fixture: ComponentFixture<NightSoulConnorChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightSoulConnorChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightSoulConnorChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
