import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UnlockType } from '@app/core/models/unlock-type.enum';

@Component({
    selector: 'app-unlock-condition',
    templateUrl: './unlock-condition.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnlockConditionComponent {
    UnlockType = UnlockType;

    @Input() unlockType: UnlockType;
    @Input() bracketsOnlyAroundIcon: boolean;

    constructor() {}
}
