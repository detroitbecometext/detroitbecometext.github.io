import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/core/models';
import { RelationType } from '@app/core/models/relation-type.enum';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTranslationComponent {
    RelationType = RelationType;
    Character = Character;

    constructor(private readonly translocoService: TranslocoService) {}

    public translateObject(
        translationKey: string,
        startIndex: number | null = undefined,
        endIndex: number | null = undefined,
        separator: string = ' '
    ): Observable<string> {
        return this.translocoService
            .selectTranslateObject(translationKey)
            .pipe(
                map((value) =>
                    Object.values(value)
                        .slice(startIndex, endIndex)
                        .join(separator)
                )
            );
    }
}
