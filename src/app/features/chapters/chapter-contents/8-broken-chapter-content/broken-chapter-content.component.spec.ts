import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenChapterContentComponent } from './broken-chapter-content.component';

describe('BrokenChapterContentComponent', () => {
  let component: BrokenChapterContentComponent;
  let fixture: ComponentFixture<BrokenChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokenChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
