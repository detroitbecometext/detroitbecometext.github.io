import {
    Component,
    OnInit,
    ViewEncapsulation,
    ComponentFactoryResolver,
    ViewChild,
} from '@angular/core';
import { Chapter } from '@app/core/models/chapter';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/core/services/data.service';
import { BehaviorSubject } from 'rxjs';
import { ChapterContentDirective } from '@app/directives/chapter-content.directive';
import { IChapterContent } from '@app/interfaces/chapter-component.interface';

@Component({
    selector: 'app-chapter',
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss'],
    //encapsulation: ViewEncapsulation.None,
})
export class ChapterComponent implements OnInit {
    public chapter: Chapter;
    public chapterContent: string;
    public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

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

    @ViewChild(ChapterContentDirective, { static: true })
    contentHost: ChapterContentDirective;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private http: HttpClient,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        console.log('init'); //TODO: remove
        this.route.paramMap.subscribe((params) => {
            this.isLoading$.next(true);
            const chapterId: number = +params.get('id');
            console.log('in subscribe', chapterId); //TODO: remove
            this.LoadChapter(chapterId);
        });
    }

    private LoadChapter(chapterId: number): void {
        this.chapter = this.dataService.getChapter(chapterId);
        if (this.chapter === undefined) {
            // Chapter doesn't exist, redirecting to 404
            this.router.navigate(['404']);
        }

        // Load navigation ids
        this.previousChapterId$.next(
            this.dataService.getPreviousChapterId(chapterId)
        );
        this.nextChapterId$.next(this.dataService.getNextChapterId(chapterId));
        this.previousCharacterChapterId$.next(
            this.dataService.getPreviousChapterId(
                chapterId,
                this.chapter.character
            )
        );
        this.nextCharacterChapterId$.next(
            this.dataService.getNextChapterId(chapterId, this.chapter.character)
        );

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
    }
}
