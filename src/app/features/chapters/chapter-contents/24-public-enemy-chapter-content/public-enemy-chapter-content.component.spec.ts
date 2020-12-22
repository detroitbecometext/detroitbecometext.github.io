import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEnemyChapterContentComponent } from './public-enemy-chapter-content.component';

describe('PublicEnemyChapterContentComponent', () => {
  let component: PublicEnemyChapterContentComponent;
  let fixture: ComponentFixture<PublicEnemyChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicEnemyChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicEnemyChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
