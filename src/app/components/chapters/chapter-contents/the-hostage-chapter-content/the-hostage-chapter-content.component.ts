import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IChapterContent } from '@app/interfaces/chapter-component.interface';

@Component({
  selector: 'app-the-hostage-chapter-content',
  templateUrl: './the-hostage-chapter-content.component.html',
  styleUrls: ['./the-hostage-chapter-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheHostageChapterContentComponent
  implements OnInit, IChapterContent {
  constructor() {}

  ngOnInit(): void {}
}
