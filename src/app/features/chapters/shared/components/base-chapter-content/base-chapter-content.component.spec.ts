import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChapterContentComponent } from './base-chapter-content.component';

describe('BaseChapterContentComponent', () => {
  let component: BaseChapterContentComponent;
  let fixture: ComponentFixture<BaseChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
