import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() routerLink: object[];
    @Input() imageSource: string;
    @Input() imageAlt: string;
    @Input() title: string;
    @Input() text: string;

    constructor() {}
}
