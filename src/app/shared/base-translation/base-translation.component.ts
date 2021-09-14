import { Character } from '@app/core/models/character.enum';
import { RelationName } from '@app/core/models/relation-name.enum';
import { RelationType } from '@app/core/models/relation-type.enum';
import { UnlockType } from '@app/core/models/unlock-type.enum';
import { CommonTranslationKey } from '@app/core/utils/common-translation-keys.enum';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseTranslationComponent {
    RelationType = RelationType;
    Character = Character;
    UnlockType = UnlockType;
    CommonTranslationKey = CommonTranslationKey;
    RelationName = RelationName;

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
                    typeof value === 'string'
                        ? value
                        : Object.values(value)
                              .slice(startIndex, endIndex)
                              .join(separator)
                )
            );
    }
}
