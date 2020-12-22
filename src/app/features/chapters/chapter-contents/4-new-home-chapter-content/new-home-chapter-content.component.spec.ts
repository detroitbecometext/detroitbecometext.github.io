import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeChapterContentComponent } from './new-home-chapter-content.component';

describe('NewHomeChapterContentComponent', () => {
  let component: NewHomeChapterContentComponent;
  let fixture: ComponentFixture<NewHomeChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHomeChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomeChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
