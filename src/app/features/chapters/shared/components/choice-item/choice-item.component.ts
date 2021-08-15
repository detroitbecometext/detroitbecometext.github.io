import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-choice-item',
    templateUrl: './choice-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceItemComponent {
    @Input() public choiceLabel: string;
    @Input() public brackets: boolean = false;

    constructor() {}
}
