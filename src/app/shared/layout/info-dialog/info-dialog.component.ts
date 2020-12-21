import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@app/core/services/data.service';
import { Chapter } from '@app/core/models/chapter';
import { Status } from '@app/core/models/status.enum';

@Component({
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
  public chapters: Chapter[];

  Status = Status;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.chapters = this.dataService.getChapters();
  }
}
