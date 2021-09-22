import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-card-container',
    templateUrl: './card-container.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {
    constructor() {}
}
