import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Magazine } from '@app/core/models/magazine';
import { MagazineService } from '@app/core/services/magazine.service';
import { BaseDataItemNavigatorComponent } from '@app/shared/base-data-item-navigator/base-data-item-navigator.component';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './magazine.component.html',
})
export class MagazineComponent
    extends BaseDataItemNavigatorComponent<Magazine>
    implements OnInit
{
    public subHeadlines: Observable<string>;

    constructor(
        route: ActivatedRoute,
        magazineService: MagazineService,
        router: Router,
        translocoService: TranslocoService
    ) {
        super(route, router, magazineService, translocoService);
        this.baseUrl = 'magazines';
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
