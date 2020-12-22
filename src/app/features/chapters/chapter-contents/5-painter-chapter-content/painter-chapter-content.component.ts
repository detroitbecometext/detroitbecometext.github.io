import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-painter-chapter-content',
  templateUrl: './painter-chapter-content.component.html',
  styleUrls: ['./painter-chapter-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PainterChapterContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
