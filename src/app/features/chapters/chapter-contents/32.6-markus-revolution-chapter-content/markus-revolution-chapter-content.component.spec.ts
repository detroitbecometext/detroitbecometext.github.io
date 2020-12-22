import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkusRevolutionChapterContentComponent } from './markus-revolution-chapter-content.component';

describe('MarkusRevolutionChapterContentComponent', () => {
  let component: MarkusRevolutionChapterContentComponent;
  let fixture: ComponentFixture<MarkusRevolutionChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkusRevolutionChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkusRevolutionChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
