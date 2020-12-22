import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNestChapterContentComponent } from './the-nest-chapter-content.component';

describe('TheNestChapterContentComponent', () => {
  let component: TheNestChapterContentComponent;
  let fixture: ComponentFixture<TheNestChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheNestChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNestChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
