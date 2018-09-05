import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chapter } from '../../models/Chapter';
import { DataService } from '../../data.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { SafeHtmlPipe } from '../../models/SafeHtmlPipe';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class ChapterComponent implements OnInit {

  SafeHtmlPipe = SafeHtmlPipe;
  chapter: Chapter;
  chapterContent: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private http: HttpClient,  private router: Router) { }

  ngOnInit() 
  {
    //Init the chapter content to display a loading icon
    this.chapterContent = "<div class=\"loading\"><span><i class=\"fas fa-circle-notch fa-spin\"></i></span><h2>...Loading...</h2></div>";
    
    //Listen to route changes to get the current chapter
    this.route.params.subscribe(
      params => {
          const number = params['number'];
          this.getChapterInfos(number);
      }
    );
  }

  getChapterInfos(chapterNumber: string): void{

    //Get the chapter object
    this.chapter = this.dataService.getChapter(chapterNumber);
    if(this.chapter === undefined)
    {
      //Chapter doesn't exists, redirecting to 404
      this.router.navigate(['/404']);
    }

    //Get the chapter content
    this.http.get('assets/html/chapter' + this.chapter.Number + '.html', {responseType: 'text'})
    .subscribe(
        data => 
        {
          if(data === ""){
            this.chapterContent = "No content for this chapter yet.";
          }
          else{
            this.chapterContent = data;
          }
        },
        error => 
        {
          console.log(error);
          this.chapterContent = "An error occured.";
        }
    );

  }

}
