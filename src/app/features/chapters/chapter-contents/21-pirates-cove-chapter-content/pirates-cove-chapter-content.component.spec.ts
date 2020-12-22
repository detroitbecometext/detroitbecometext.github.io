import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesCoveChapterContentComponent } from './pirates-cove-chapter-content.component';

describe('PiratesCoveChapterContentComponent', () => {
  let component: PiratesCoveChapterContentComponent;
  let fixture: ComponentFixture<PiratesCoveChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratesCoveChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesCoveChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
