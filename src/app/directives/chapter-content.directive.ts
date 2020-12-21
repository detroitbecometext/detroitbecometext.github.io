import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChapterContent]',
})
export class ChapterContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
