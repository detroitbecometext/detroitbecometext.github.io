import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryItem } from '@app/core/models/gallery-item';
import { GalleryService } from '@app/core/services/gallery.service';
import { BaseDataItemNavigatorComponent } from '@app/shared/components/base-data-item-navigator/base-data-item-navigator.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    templateUrl: './gallery.component.html',
})
export class GalleryComponent
    extends BaseDataItemNavigatorComponent<GalleryItem>
    implements OnInit
{
    constructor(
        route: ActivatedRoute,
        galleryService: GalleryService,
        router: Router,
        translocoService: TranslocoService
    ) {
        super(route, router, galleryService, translocoService);
        this.baseUrl = 'gallery';
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
