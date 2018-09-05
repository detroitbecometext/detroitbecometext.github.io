import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../models/Chapter';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.less']
})
export class ChapterListComponent implements OnInit 
{

  ChapterList: Chapter[];

  constructor(private dataService: DataService) 
  {
  }

  ngOnInit() 
  {
    this.ChapterList = this.dataService.getChapters();
  }

}
