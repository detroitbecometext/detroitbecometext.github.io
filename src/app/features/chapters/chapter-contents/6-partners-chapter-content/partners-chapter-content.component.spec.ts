import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersChapterContentComponent } from './partners-chapter-content.component';

describe('PartnersChapterContentComponent', () => {
  let component: PartnersChapterContentComponent;
  let fixture: ComponentFixture<PartnersChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
