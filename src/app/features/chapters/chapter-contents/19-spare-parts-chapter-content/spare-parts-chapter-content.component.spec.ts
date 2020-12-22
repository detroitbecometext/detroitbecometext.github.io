import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsChapterContentComponent } from './spare-parts-chapter-content.component';

describe('SparePartsChapterContentComponent', () => {
  let component: SparePartsChapterContentComponent;
  let fixture: ComponentFixture<SparePartsChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartsChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparePartsChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
