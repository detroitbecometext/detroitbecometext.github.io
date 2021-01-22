import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChloeComponent } from './chloe.component';

describe('ChloeComponent', () => {
  let component: ChloeComponent;
  let fixture: ComponentFixture<ChloeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChloeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChloeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
