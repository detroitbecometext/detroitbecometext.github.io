import { Component } from '@angular/core';
import { GoatCounterService } from './core/services/goat-counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private readonly goatCounterService: GoatCounterService) {}
}
