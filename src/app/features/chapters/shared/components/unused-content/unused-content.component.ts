import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-unused-content',
  templateUrl: './unused-content.component.html',
  styleUrls: ['./unused-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnusedContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
