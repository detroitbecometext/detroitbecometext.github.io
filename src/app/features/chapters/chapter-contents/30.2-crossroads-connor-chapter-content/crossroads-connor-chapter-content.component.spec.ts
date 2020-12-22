import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossroadsConnorChapterContentComponent } from './crossroads-connor-chapter-content.component';

describe('CrossroadsConnorChapterContentComponent', () => {
  let component: CrossroadsConnorChapterContentComponent;
  let fixture: ComponentFixture<CrossroadsConnorChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossroadsConnorChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossroadsConnorChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
