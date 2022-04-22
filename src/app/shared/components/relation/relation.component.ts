import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { RelationName } from '@app/core/models/relation-name.enum';
import { RelationType } from '@app/core/models/relation-type.enum';

@Component({
    selector: 'app-relation',
    templateUrl: './relation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelationComponent implements OnInit {
    @Input() public name: RelationName;
    @Input() public type: RelationType;
    public imageSource: string;
    public imageAlt: string;

    public up: boolean;

    constructor() {}

    ngOnInit(): void {
        switch (this.type) {
            case RelationType.SmallUp:
                this.imageSource = 'assets/images/slight_increase.png';
                this.imageAlt = 'slight_increase';
                this.up = true;
                break;
            case RelationType.LargeUp:
                this.imageSource = 'assets/images/large_increase.png';
                this.imageAlt = 'large_increase';
                this.up = true;
                break;
            case RelationType.SmallDown:
                this.imageSource = 'assets/images/slight_decrease.png';
                this.imageAlt = 'slight_decrease';
                this.up = false;
                break;
            case RelationType.LargeDown:
                this.imageSource = 'assets/images/large_decrease.png';
                this.imageAlt = 'large_decrease';
                this.up = false;
                break;
            default:
                break;
        }
    }
}
