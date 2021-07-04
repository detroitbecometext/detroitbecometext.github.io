import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnusedContentComponent } from './unused-content.component';

describe('UnusedContentComponent', () => {
  let component: UnusedContentComponent;
  let fixture: ComponentFixture<UnusedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnusedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnusedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
