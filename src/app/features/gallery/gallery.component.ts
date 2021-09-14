import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GalleryItem } from '@app/core/models/gallery-item';
import { GalleryService } from '@app/core/services/gallery.service';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    templateUrl: './gallery.component.html',
})
export class GalleryComponent
    extends BaseTranslationComponent
    implements OnInit
{
    public galleryItem: GalleryItem;
    public previousItemId: number | null;
    public nextItemId: number | null;

    /* TODO: Refactor navigation and model logic */
    constructor(
        private readonly route: ActivatedRoute,
        private readonly galleryService: GalleryService,
        private readonly router: Router,
        translocoService: TranslocoService
    ) {
        super(translocoService);
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const itemId: number = +params.get('id');
            this.galleryItem = this.galleryService.getItem(itemId);

            if (this.galleryItem === undefined) {
                this.router.navigate(['not-found']);
                return;
            }

            this.previousItemId =
                this.galleryService.getItem(this.galleryItem.id - 1)?.id ??
                null;
            this.nextItemId =
                this.galleryService.getItem(this.galleryItem.id + 1)?.id ??
                null;
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        let newId: number | null = null;
        if (event.key == 'ArrowRight') {
            newId = this.galleryItem.id + 1;
        } else if (event.key == 'ArrowLeft') {
            newId = this.galleryItem.id - 1;
        }

        let itemExists = this.galleryService.getItem(newId) !== undefined;

        if (newId !== null && itemExists) {
            /* TODO: refactor with relative nav */
            this.router.navigate(['gallery', newId]);
        }
    }
}
