import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningChapterContentComponent } from './opening-chapter-content.component';

describe('OpeningChapterContentComponent', () => {
  let component: OpeningChapterContentComponent;
  let fixture: ComponentFixture<OpeningChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
