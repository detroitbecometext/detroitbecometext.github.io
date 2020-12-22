import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdenClubChapterContentComponent } from './eden-club-chapter-content.component';

describe('EdenClubChapterContentComponent', () => {
  let component: EdenClubChapterContentComponent;
  let fixture: ComponentFixture<EdenClubChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdenClubChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdenClubChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
