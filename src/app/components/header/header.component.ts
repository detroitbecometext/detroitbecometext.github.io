import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../models/Chapter';
import { DataService } from '../../data.service';
import { Status } from '../../models/Chapter';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit 
{
  //Necessary to use Status enum in template
  Status = Status;
  ChapterList: Chapter[];

  constructor(private dataService: DataService) { }

  ngOnInit() 
  {
    //Get the chapter list
    this.ChapterList = this.dataService.getChapters();
    
    //Initialize materialize components
    $(document).ready(function ()
    {
        $('.sidenav').sidenav();
        $('.modal').modal();
    });
  }

}
