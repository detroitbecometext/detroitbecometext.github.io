import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Soundtrack } from '@app/core/models/soundtrack';
import { SoundtrackService } from '@app/core/services/soundtrack.service';
import { BaseDataItemNavigatorComponent } from '@app/shared/components/base-data-item-navigator/base-data-item-navigator.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-soundtrack',
    templateUrl: './soundtrack.component.html',
})
export class SoundtrackComponent
    extends BaseDataItemNavigatorComponent<Soundtrack>
    implements OnInit
{
    constructor(
        route: ActivatedRoute,
        soundtrackService: SoundtrackService,
        router: Router,
        translocoService: TranslocoService
    ) {
        super(route, router, soundtrackService, translocoService);
        this.baseUrl = 'soundtrack';
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
