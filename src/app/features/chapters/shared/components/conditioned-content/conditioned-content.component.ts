import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-conditioned-content',
  templateUrl: './conditioned-content.component.html',
  styleUrls: ['./conditioned-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionedContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
