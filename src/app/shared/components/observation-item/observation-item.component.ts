import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-observation-item',
    templateUrl: './observation-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationItemComponent {
    @Input() title: string;
    @Input() subline1: string;
    @Input() subline2: string;

    constructor() {}
}
