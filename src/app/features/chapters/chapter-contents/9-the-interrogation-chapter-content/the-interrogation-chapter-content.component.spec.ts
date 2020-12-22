import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInterrogationChapterContentComponent } from './the-interrogation-chapter-content.component';

describe('TheInterrogationChapterContentComponent', () => {
  let component: TheInterrogationChapterContentComponent;
  let fixture: ComponentFixture<TheInterrogationChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheInterrogationChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInterrogationChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
