import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkusDemonstrationChapterContentComponent } from './markus-demonstration-chapter-content.component';

describe('MarkusDemonstrationChapterContentComponent', () => {
  let component: MarkusDemonstrationChapterContentComponent;
  let fixture: ComponentFixture<MarkusDemonstrationChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkusDemonstrationChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkusDemonstrationChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
