import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-dialogue-line',
    templateUrl: './dialogue-line.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogueLineComponent {
    @Input() name: string;

    constructor() {}
}
