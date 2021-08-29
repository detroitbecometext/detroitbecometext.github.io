import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-observation',
    templateUrl: './observation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationComponent {
    @Input() label: string;

    constructor() {}
}
