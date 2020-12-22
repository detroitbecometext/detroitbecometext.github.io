import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossroadsMarkusChapterContentComponent } from './crossroads-markus-chapter-content.component';

describe('CrossroadsMarkusChapterContentComponent', () => {
  let component: CrossroadsMarkusChapterContentComponent;
  let fixture: ComponentFixture<CrossroadsMarkusChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossroadsMarkusChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossroadsMarkusChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
