import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheRunChapterContentComponent } from './on-the-run-chapter-content.component';

describe('OnTheRunChapterContentComponent', () => {
  let component: OnTheRunChapterContentComponent;
  let fixture: ComponentFixture<OnTheRunChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnTheRunChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheRunChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
