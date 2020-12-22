import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraCapturedChapterContentComponent } from './kara-captured-chapter-content.component';

describe('KaraCapturedChapterContentComponent', () => {
  let component: KaraCapturedChapterContentComponent;
  let fixture: ComponentFixture<KaraCapturedChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaraCapturedChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraCapturedChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
