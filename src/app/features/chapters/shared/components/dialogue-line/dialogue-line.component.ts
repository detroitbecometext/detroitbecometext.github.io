import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-dialogue-line',
    templateUrl: './dialogue-line.component.html',
    styleUrls: ['./dialogue-line.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogueLineComponent implements OnInit {
    @Input() name: string;

    constructor() {}

    ngOnInit(): void {}
}
