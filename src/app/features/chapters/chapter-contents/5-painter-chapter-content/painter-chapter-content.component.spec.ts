import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterChapterContentComponent } from './painter-chapter-content.component';

describe('PainterChapterContentComponent', () => {
  let component: PainterChapterContentComponent;
  let fixture: ComponentFixture<PainterChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainterChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
