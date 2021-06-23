import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueLineComponent } from './dialogue-line.component';

describe('DialogueLineComponent', () => {
  let component: DialogueLineComponent;
  let fixture: ComponentFixture<DialogueLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
