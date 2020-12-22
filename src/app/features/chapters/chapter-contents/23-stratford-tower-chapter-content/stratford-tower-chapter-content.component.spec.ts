import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratfordTowerChapterContentComponent } from './stratford-tower-chapter-content.component';

describe('StratfordTowerChapterContentComponent', () => {
  let component: StratfordTowerChapterContentComponent;
  let fixture: ComponentFixture<StratfordTowerChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratfordTowerChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratfordTowerChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
