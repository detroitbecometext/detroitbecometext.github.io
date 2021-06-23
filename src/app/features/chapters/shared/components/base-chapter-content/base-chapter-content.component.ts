import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseChapterContentComponent implements OnInit {
    constructor(private readonly translocoService: TranslocoService) {}

    ngOnInit(): void {}

    public translateObject(
        translationKey: string,
        startIndex: number | null = undefined,
        endIndex: number | null = undefined
    ): Observable<string> {
        return this.translocoService
            .selectTranslateObject(translationKey)
            .pipe(
                map((value) =>
                    Object.values(value).slice(startIndex, endIndex).join(' ')
                )
            );
    }
}
