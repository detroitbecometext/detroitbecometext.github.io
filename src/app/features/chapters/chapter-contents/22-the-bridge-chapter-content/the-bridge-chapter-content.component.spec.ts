import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBridgeChapterContentComponent } from './the-bridge-chapter-content.component';

describe('TheBridgeChapterContentComponent', () => {
  let component: TheBridgeChapterContentComponent;
  let fixture: ComponentFixture<TheBridgeChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBridgeChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBridgeChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
