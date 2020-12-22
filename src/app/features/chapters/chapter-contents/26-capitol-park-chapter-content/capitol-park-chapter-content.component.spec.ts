import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitolParkChapterContentComponent } from './capitol-park-chapter-content.component';

describe('CapitolParkChapterContentComponent', () => {
  let component: CapitolParkChapterContentComponent;
  let fixture: ComponentFixture<CapitolParkChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitolParkChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitolParkChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
