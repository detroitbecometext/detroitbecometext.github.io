import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-relation',
    templateUrl: './relation.component.html',
    styleUrls: ['./relation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelationComponent implements OnInit {
    @Input() public name: string;
    @Input() public type: 'small up' | 'small down' | 'large up' | 'large down';
    public imageSource: string;
    public imageAlt: string;

    public up: boolean;

    constructor() {}

    ngOnInit(): void {
        switch (this.type) {
            case 'small up':
                this.imageSource = 'assets/images/slight_increase.png';
                this.imageAlt = 'slight_increase';
                this.up = true;
                break;
            case 'large up':
                this.imageSource = 'assets/images/large_increase.png';
                this.imageAlt = 'large_increase';
                this.up = true;
                break;
            case 'small down':
                this.imageSource = 'assets/images/slight_decrease.png';
                this.imageAlt = 'slight_decrease';
                this.up = false;
                break;
            case 'large down':
                this.imageSource = 'assets/images/large_decrease.png';
                this.imageAlt = 'large_decrease';
                this.up = false;
                break;
            default:
                break;
        }
    }
}
