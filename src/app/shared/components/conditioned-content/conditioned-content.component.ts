import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-conditioned-content',
    templateUrl: './conditioned-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionedContentComponent {
    constructor() {}
}
