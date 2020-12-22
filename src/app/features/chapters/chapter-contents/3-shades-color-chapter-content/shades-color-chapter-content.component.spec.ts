import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadesColorChapterContentComponent } from './shades-color-chapter-content.component';

describe('ShadesColorChapterContentComponent', () => {
  let component: ShadesColorChapterContentComponent;
  let fixture: ComponentFixture<ShadesColorChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadesColorChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadesColorChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
