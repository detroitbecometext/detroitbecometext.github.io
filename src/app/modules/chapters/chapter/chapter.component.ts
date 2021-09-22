import { ComponentPortal } from '@angular/cdk/portal';
import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '@app/core/models/chapter';
import { ChapterService } from '@app/core/services';
import { BaseDataItemNavigatorComponent } from '@app/shared/components/base-data-item-navigator/base-data-item-navigator.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    templateUrl: './chapter.component.html',
})
export class ChapterComponent
    extends BaseDataItemNavigatorComponent<Chapter>
    implements OnInit, AfterContentInit
{
    public portal: ComponentPortal<any>;

    constructor(
        route: ActivatedRoute,
        chapterService: ChapterService,
        router: Router,
        translocoService: TranslocoService,
        private readonly viewPortScroller: ViewportScroller
    ) {
        super(route, router, chapterService, translocoService);
        this.baseUrl = 'chapters';
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

    ngAfterContentInit(): void {
        this.currentItem$.subscribe((item) => {
            this.portal = new ComponentPortal(item.component);
            this.viewPortScroller.scrollToPosition([0, 0]);
        });
    }
}
