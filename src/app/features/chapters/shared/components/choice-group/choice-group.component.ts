import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-choice-group',
  templateUrl: './choice-group.component.html',
  styleUrls: ['./choice-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
