import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-unused-content',
    templateUrl: './unused-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnusedContentComponent {
    constructor() {}
}
