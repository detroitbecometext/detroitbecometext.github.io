import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTheDeadChapterContentComponent } from './from-the-dead-chapter-content.component';

describe('FromTheDeadChapterContentComponent', () => {
  let component: FromTheDeadChapterContentComponent;
  let fixture: ComponentFixture<FromTheDeadChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromTheDeadChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTheDeadChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
