import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForHankChapterContentComponent } from './waiting-for-hank-chapter-content.component';

describe('WaitingForHankChapterContentComponent', () => {
  let component: WaitingForHankChapterContentComponent;
  let fixture: ComponentFixture<WaitingForHankChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingForHankChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForHankChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
