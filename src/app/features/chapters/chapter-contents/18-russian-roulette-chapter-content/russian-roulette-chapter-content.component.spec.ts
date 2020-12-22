import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianRouletteChapterContentComponent } from './russian-roulette-chapter-content.component';

describe('RussianRouletteChapterContentComponent', () => {
  let component: RussianRouletteChapterContentComponent;
  let fixture: ComponentFixture<RussianRouletteChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussianRouletteChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianRouletteChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
