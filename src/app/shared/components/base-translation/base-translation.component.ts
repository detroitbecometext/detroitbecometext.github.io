import { Component, HostListener } from '@angular/core';
import { Character } from '@app/core/models/character.enum';
import { RelationName } from '@app/core/models/relation-name.enum';
import { RelationType } from '@app/core/models/relation-type.enum';
import { TupleMap } from '@app/core/models/tuple-map';
import { UnlockType } from '@app/core/models/unlock-type.enum';
import { CommonTranslationKey } from '@app/core/utils/common-translation-keys.enum';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ILanguage {
    id: string;
    label: string;
}

@Component({
    template: '',
})
export abstract class BaseTranslationComponent {
    RelationType = RelationType;
    Character = Character;
    UnlockType = UnlockType;
    CommonTranslationKey = CommonTranslationKey;
    RelationName = RelationName;

    // Map<translationKey, Map<[startIndex, endIndex], Observable>>
    private translatedObjects: Map<
        string,
        TupleMap<[number, number], Observable<string>>
    > = new Map();

    constructor(private readonly translocoService: TranslocoService) {}

    public translateObject(
        translationKey: string,
        startIndex: number | null = undefined,
        endIndex: number | null = undefined,
        separator: string = ' '
    ): Observable<string> {
        if (this.translatedObjects.has(translationKey)) {
            let translationKeyValues =
                this.translatedObjects.get(translationKey);

            if (!translationKeyValues.has([startIndex, endIndex])) {
                translationKeyValues.set(
                    [startIndex, endIndex],
                    this.GetTranslationObservable(
                        translationKey,
                        startIndex,
                        endIndex,
                        separator
                    )
                );
            }

            return translationKeyValues.get([startIndex, endIndex]);
        } else {
            this.translatedObjects.set(
                translationKey,
                new TupleMap([
                    [
                        [startIndex, endIndex],
                        this.GetTranslationObservable(
                            translationKey,
                            startIndex,
                            endIndex,
                            separator
                        ),
                    ],
                ])
            );

            return this.translatedObjects
                .get(translationKey)
                .get([startIndex, endIndex]);
        }
    }

    private GetTranslationObservable(
        translationKey: string,
        startIndex: number | null = undefined,
        endIndex: number | null = undefined,
        separator: string = ' '
    ): Observable<string> {
        return this.translocoService.selectTranslateObject(translationKey).pipe(
            map((value) => {
                if (typeof value === 'string') {
                    console.error(`${translationKey} is not an object.`);
                    return '';
                }

                return Object.values(value)
                    .slice(startIndex, endIndex)
                    .join(separator);
            })
        );
    }

    @HostListener('window:keyup', ['$event'])
    languageNavigationEvent(event: KeyboardEvent) {
        let increment = 0;
        if (event.key === 'l') {
            increment = 1;
        } else if (event.key === 'k') {
            increment = -1;
        } else {
            return;
        }

        event.stopImmediatePropagation();

        let currentLangId: string = this.translocoService.getActiveLang();
        let allLangs: ILanguage[] =
            this.translocoService.getAvailableLangs() as ILanguage[];
        let currentLangIndex = allLangs.findIndex(
            (l) => l.id === currentLangId
        );
        let nextIndex = currentLangIndex + increment;

        if (nextIndex === allLangs.length) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = allLangs.length - 1;
        }

        this.translocoService.setActiveLang(allLangs[nextIndex].id);
    }
}
