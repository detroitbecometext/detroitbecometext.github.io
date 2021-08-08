import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Magazine } from '@app/core/models';
import { MagazineService } from '@app/core/services/magazine.service';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    templateUrl: './magazine.component.html',
})
export class MagazineComponent
    extends BaseTranslationComponent
    implements OnInit
{
    public magazine: Magazine;
    public previousMagazineId: number | null;
    public nextMagazineId: number | null;
    public subHeadlines: Observable<string>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly magazineService: MagazineService,
        private readonly router: Router,
        translocoService: TranslocoService
    ) {
        super(translocoService);
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const magazineId: number = +params.get('id');
            this.magazine = this.magazineService.getMagazine(magazineId);

            if (this.magazine === undefined) {
                this.router.navigate(['not-found']);
                return;
            }

            this.previousMagazineId =
                this.magazineService.getMagazine(this.magazine.id - 1)?.id ??
                null;
            this.nextMagazineId =
                this.magazineService.getMagazine(this.magazine.id + 1)?.id ??
                null;
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        let newId: number | null = null;
        if (event.key == 'ArrowRight') {
            newId = this.magazine.id + 1;
        } else if (event.key == 'ArrowLeft') {
            newId = this.magazine.id - 1;
        }

        let magazineExists =
            this.magazineService.getMagazine(newId) !== undefined;

        if (newId !== null && magazineExists) {
            this.router.navigate(['magazines', newId]);
        }
    }
}
