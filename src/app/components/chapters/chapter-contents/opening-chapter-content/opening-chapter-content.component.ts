import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IChapterContent } from '@app/interfaces/chapter-component.interface';

@Component({
  selector: 'app-opening-chapter-content',
  templateUrl: './opening-chapter-content.component.html',
  styleUrls: ['./opening-chapter-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpeningChapterContentComponent implements OnInit, IChapterContent {
  constructor() {}

  ngOnInit(): void {}
}
