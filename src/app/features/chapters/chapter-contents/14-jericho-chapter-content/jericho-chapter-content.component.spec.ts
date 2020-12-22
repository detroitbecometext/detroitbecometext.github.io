import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerichoChapterContentComponent } from './jericho-chapter-content.component';

describe('JerichoChapterContentComponent', () => {
  let component: JerichoChapterContentComponent;
  let fixture: ComponentFixture<JerichoChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JerichoChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JerichoChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
