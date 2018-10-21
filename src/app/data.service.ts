import { Injectable } from '@angular/core';
import { Chapter } from '../app/models/Chapter';
import { Status } from '../app/models/Chapter';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private ChapterList: Chapter[];

  constructor() {
    //Create all the chapters
    this.ChapterList =
      [
        new Chapter("1", "The Hostage", "chapter1.html", "Chapter1.jpg", Status.Done),
        new Chapter("2", "Opening", "chapter2.html", "Chapter2.jpg", Status.Done),
        new Chapter("3", "Shades of Color", "chapter3.html", "Chapter3.jpg", Status.Done),
        new Chapter("4", "A New Home", "chapter4.html", "Chapter4.jpg", Status.Done),
        new Chapter("5", "The Painter", "chapter5.html", "Chapter5.jpg", Status.Done),
        new Chapter("6", "Partners", "chapter6.html", "Chapter6.jpg", Status.Done),
        new Chapter("7", "Stormy Night", "chapter7.html", "Chapter7.jpg", Status.Done),
        new Chapter("8", "Broken", "chapter8.html", "Chapter8.jpg", Status.Done),
        new Chapter("9", "The Interrogation", "chapter9.html", "Chapter9.jpg", Status.Done),
        new Chapter("10", "Fugitives", "chapter10.html", "Chapter10.jpg", Status.InProgress),
        new Chapter("11", "From the Dead", "chapter11.html", "Chapter11.jpg", Status.InProgress),
        new Chapter("12", "Waiting for Hank...", "chapter12.html", "Chapter12.jpg", Status.Done),
        new Chapter("13", "On the Run", "chapter13.html", "Chapter13.jpg", Status.Done),
        new Chapter("14", "Jericho", "chapter14.html", "Chapter14.jpg", Status.Done),
        new Chapter("15", "The Nest", "chapter15.html", "Chapter15.jpg", Status.Done),
        new Chapter("16", "Time to Decide", "chapter16.html", "Chapter16.jpg", Status.Done),
        new Chapter("17", "Zlatko", "chapter17.html", "Chapter17.jpg", Status.Done),
        new Chapter("18", "Russian Roulette", "chapter18.html", "Chapter18.jpg", Status.InProgress),
        new Chapter("19", "Spare Parts", "chapter19.html", "Chapter19.jpg", Status.InProgress),
        new Chapter("20", "The Eden Club", "chapter20.html", "Chapter20.jpg", Status.Done),
        new Chapter("21", "The Pirates' Cove", "chapter21.html", "Chapter21.jpg", Status.Done),
        new Chapter("22", "The Bridge", "chapter22.html", "Chapter22.jpg", Status.Done),
        new Chapter("23", "The Stratford Tower", "chapter23.html", "Chapter23.jpg", Status.Done),
        new Chapter("24", "Public Enemy", "chapter24.html", "Chapter24.jpg", Status.Done),
        new Chapter("25", "Midnight Train", "chapter25.html", "Chapter25.jpg", Status.Done),
        new Chapter("26", "Capitol Park", "chapter26.html", "Chapter26.jpg", Status.InProgress),
        new Chapter("27", "Meet Kamski", "chapter27.html", "Chapter27.jpg", Status.InProgress),
        new Chapter("28", "Freedom March", "chapter28.html", "Chapter28.jpg", Status.InProgress),
        new Chapter("29", "Last Chance, Connor", "chapter29.html", "Chapter29.jpg", Status.Done),
        new Chapter("30.1", "Crossroads - Kara", "chapter30.1.htm", "Chapter30.jpg", Status.InProgress),
        new Chapter("30.2", "Crossroads - Connor", "chapter30.2.htm", "Chapter30.jpg", Status.Done),
        new Chapter("30.3", "Crossroads - Markus", "chapter30.3.htm", "Chapter30.jpg", Status.Done),
        new Chapter("31.1", "Night of the Soul - Markus", "chapter31.1.htm", "Chapter31.jpg", Status.InProgress),
        new Chapter("31.2", "Night of the Soul - Connor", "chapter31.2.htm", "Chapter31.jpg", Status.InProgress),
        new Chapter("32.1", "Kara Leaving Detroit", "chapter32.1.htm", "Chapter32.1.jpg", Status.InProgress),
        new Chapter("32.2", "Kara Captured", "chapter32.2.htm", "Chapter32.2.jpg", Status.InProgress),
        new Chapter("32.3", "Connor's Last Mission", "chapter32.3.htm", "Chapter32.3.jpg", Status.Done),
        new Chapter("32.4", "Connor at the Cyberlife Tower", "chapter32.4.htm", "Chapter32.4.jpg", Status.Done),
        new Chapter("32.5", "Markus Demonstration", "chapter32.5.htm", "Chapter32.5.jpg", Status.InProgress),
        new Chapter("32.6", "Markus Revolution", "chapter32.6.htm", "Chapter32.6.jpg", Status.NotStarted)
      ];
  }

  getChapters(): Chapter[]
  {
    return this.ChapterList;
  }

  getChapter(number: string): Chapter
  {
    return this.ChapterList.find(chapter => chapter.Number === number);
  }
}
