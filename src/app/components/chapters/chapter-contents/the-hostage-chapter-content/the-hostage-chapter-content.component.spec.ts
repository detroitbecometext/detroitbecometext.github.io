import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHostageChapterContentComponent } from './the-hostage-chapter-content.component';

describe('TheHostageChapterContentComponent', () => {
  let component: TheHostageChapterContentComponent;
  let fixture: ComponentFixture<TheHostageChapterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheHostageChapterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHostageChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
