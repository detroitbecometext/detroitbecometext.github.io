import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FugitivesChapterContentComponent } from './fugitives-chapter-content.component';

describe('FugitivesChapterContentComponent', () => {
  let component: FugitivesChapterContentComponent;
  let fixture: ComponentFixture<FugitivesChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FugitivesChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FugitivesChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
