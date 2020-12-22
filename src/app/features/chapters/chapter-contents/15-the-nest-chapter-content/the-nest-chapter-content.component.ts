import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-the-nest-chapter-content',
  templateUrl: './the-nest-chapter-content.component.html',
  styleUrls: ['./the-nest-chapter-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheNestChapterContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
