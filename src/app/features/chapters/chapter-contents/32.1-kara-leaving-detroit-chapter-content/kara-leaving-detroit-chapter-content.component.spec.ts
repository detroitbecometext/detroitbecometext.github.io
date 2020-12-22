import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraLeavingDetroitChapterContentComponent } from './kara-leaving-detroit-chapter-content.component';

describe('KaraLeavingDetroitChapterContentComponent', () => {
  let component: KaraLeavingDetroitChapterContentComponent;
  let fixture: ComponentFixture<KaraLeavingDetroitChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaraLeavingDetroitChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraLeavingDetroitChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
