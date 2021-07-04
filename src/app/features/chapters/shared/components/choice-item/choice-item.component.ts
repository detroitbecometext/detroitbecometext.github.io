import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-choice-item',
    templateUrl: './choice-item.component.html',
    styleUrls: ['./choice-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceItemComponent implements OnInit {
    @Input() public choiceName: string;

    constructor() {}

    ngOnInit(): void {}
}
