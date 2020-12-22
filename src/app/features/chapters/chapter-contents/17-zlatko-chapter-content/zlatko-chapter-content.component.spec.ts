import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlatkoChapterContentComponent } from './zlatko-chapter-content.component';

describe('ZlatkoChapterContentComponent', () => {
  let component: ZlatkoChapterContentComponent;
  let fixture: ComponentFixture<ZlatkoChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZlatkoChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlatkoChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
