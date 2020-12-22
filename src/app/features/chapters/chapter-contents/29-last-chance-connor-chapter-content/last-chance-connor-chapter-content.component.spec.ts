import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastChanceConnorChapterContentComponent } from './last-chance-connor-chapter-content.component';

describe('LastChanceConnorChapterContentComponent', () => {
  let component: LastChanceConnorChapterContentComponent;
  let fixture: ComponentFixture<LastChanceConnorChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastChanceConnorChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastChanceConnorChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
