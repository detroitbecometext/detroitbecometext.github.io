import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Magazine } from '@app/core/models';
import { MagazineService } from '@app/core/services/magazine.service';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    templateUrl: './magazine.component.html',
    styleUrls: ['./magazine.component.scss'],
})
export class MagazineComponent implements OnInit {
    public magazine: Magazine;
    public previousMagazineId: number | null;
    public nextMagazineId: number | null;
    public subHeadlines: Observable<string>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly magazineService: MagazineService,
        private readonly router: Router,
        private readonly translocoService: TranslocoService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const magazineId: number = +params.get('id');
            this.magazine = this.magazineService.getMagazine(magazineId);
            console.log(this.magazine);
            if (this.magazine === undefined) {
                this.router.navigate(['not-found']);
                return;
            }

            this.previousMagazineId = this.magazineService.getMagazine(
                this.magazine.id - 1
            )?.id;
            this.nextMagazineId = this.magazineService.getMagazine(
                this.magazine.id + 1
            )?.id;

            this.subHeadlines = this.translocoService
                .selectTranslateObject(
                    `GUI.MAGAZINE.${this.magazine.translationCategory}.SUBHEADLINE`
                )
                .pipe(map((value) => Object.values(value).join(' ● ')));
        });
    }
}
