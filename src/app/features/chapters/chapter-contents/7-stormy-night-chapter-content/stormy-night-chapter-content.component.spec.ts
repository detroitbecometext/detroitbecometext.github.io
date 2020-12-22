import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormyNightChapterContentComponent } from './stormy-night-chapter-content.component';

describe('StormyNightChapterContentComponent', () => {
  let component: StormyNightChapterContentComponent;
  let fixture: ComponentFixture<StormyNightChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StormyNightChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StormyNightChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
