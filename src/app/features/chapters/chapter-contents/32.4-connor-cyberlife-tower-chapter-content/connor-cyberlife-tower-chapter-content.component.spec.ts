import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnorCyberlifeTowerChapterContentComponent } from './connor-cyberlife-tower-chapter-content.component';

describe('ConnorCyberlifeTowerChapterContentComponent', () => {
  let component: ConnorCyberlifeTowerChapterContentComponent;
  let fixture: ComponentFixture<ConnorCyberlifeTowerChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnorCyberlifeTowerChapterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnorCyberlifeTowerChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
