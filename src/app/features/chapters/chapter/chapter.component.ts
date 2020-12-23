import { ViewportScroller } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '@app/core/models';
import { DataService } from '@app/core/services';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ChapterContentDirective } from '../shared/directives/chapter-content.directive';
import { IChapterContent } from '../shared/interfaces/chapter-component.interface';

@Component({
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit, AfterViewInit {
    public chapter: Chapter;
    public chapterContent: string;
    public isLoading$: BehaviorSubject<boolean>;

    public previousChapterId$: BehaviorSubject<
        number | null
    > = new BehaviorSubject(null);
    public nextChapterId$: BehaviorSubject<number | null> = new BehaviorSubject(
        null
    );
    public previousCharacterChapterId$: BehaviorSubject<
        number | null
    > = new BehaviorSubject(null);
    public nextCharacterChapterId$: BehaviorSubject<
        number | null
    > = new BehaviorSubject(null);

    @ViewChild(ChapterContentDirective)
    contentHost: ChapterContentDirective;

    constructor(
        private readonly dataService: DataService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly viewPortScroller: ViewportScroller
    ) {}

    ngOnInit(): void {
        this.isLoading$ = new BehaviorSubject<boolean>(true);
    }

    ngAfterViewInit(): void {
        this.route.paramMap.pipe(delay(0)).subscribe((params) => {
            this.isLoading$.next(true);
            const chapterId: number = +params.get('id');
            this.LoadChapter(chapterId);
        });
    }

    private LoadChapter(chapterId: number): void {
        this.chapter = this.dataService.getChapter(chapterId);
        if (this.chapter === undefined) {
            // Chapter doesn't exist, redirecting to 404
            this.router.navigate(['not-found']);
        }

        // Load the component
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.chapter.component
        );

        const viewContainerRef = this.contentHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<IChapterContent>(
            componentFactory
        );

        this.isLoading$.next(false);
        this.viewPortScroller.scrollToPosition([0, 0]);
    }
}
