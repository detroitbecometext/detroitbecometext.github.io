import { OnInit, Component, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataItem } from '@app/core/models/data-item';
import { BaseDataService } from '@app/core/services/base-data-service';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseTranslationComponent } from '../base-translation/base-translation.component';

@Component({
    template: '',
})
export abstract class BaseDataItemNavigatorComponent<T extends DataItem>
    extends BaseTranslationComponent
    implements OnInit
{
    private currentItem: BehaviorSubject<T>;
    public currentItem$: Observable<T>;

    public previousItemId: number;
    public nextItemId: number;
    protected baseUrl: string;

    constructor(
        protected readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly dataService: BaseDataService<T>,
        translocoService: TranslocoService
    ) {
        super(translocoService);

        this.currentItem = new BehaviorSubject<T>(null);
        this.currentItem$ = this.currentItem.asObservable();
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const itemId: number = +params.get('id');
            let item = this.dataService.get(itemId);

            if (item === undefined) {
                this.router.navigate(['not-found']);
                return;
            }

            this.previousItemId = this.dataService.get(item.id - 1)?.id ?? null;
            this.nextItemId = this.dataService.get(item.id + 1)?.id ?? null;

            this.currentItem.next(item);
        });
    }

    @HostListener('window:keyup', ['$event'])
    itemNavigationEvent(event: KeyboardEvent) {
        let newId: number | null = null;
        if (event.key == 'ArrowRight') {
            newId = this.currentItem.value.id + 1;
        } else if (event.key == 'ArrowLeft') {
            newId = this.currentItem.value.id - 1;
        } else {
            return;
        }

        event.stopImmediatePropagation();

        let itemExists = this.dataService.get(newId) !== undefined;

        if (newId !== null && itemExists) {
            this.router.navigate([this.baseUrl, newId]);
        }
    }
}
