import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossroadsKaraChapterContentComponent } from './crossroads-kara-chapter-content.component';

describe('CrossroadsKaraChapterContentComponent', () => {
  let component: CrossroadsKaraChapterContentComponent;
  let fixture: ComponentFixture<CrossroadsKaraChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossroadsKaraChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossroadsKaraChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
