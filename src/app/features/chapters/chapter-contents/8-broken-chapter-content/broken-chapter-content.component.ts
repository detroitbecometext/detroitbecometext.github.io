import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broken-chapter-content',
  templateUrl: './broken-chapter-content.component.html',
  styleUrls: ['./broken-chapter-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenChapterContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
