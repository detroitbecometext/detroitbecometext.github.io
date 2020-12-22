import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomMarchChapterContentComponent } from './freedom-march-chapter-content.component';

describe('FreedomMarchChapterContentComponent', () => {
  let component: FreedomMarchChapterContentComponent;
  let fixture: ComponentFixture<FreedomMarchChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreedomMarchChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedomMarchChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
