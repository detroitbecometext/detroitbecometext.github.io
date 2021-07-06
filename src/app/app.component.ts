import { Component } from '@angular/core';
import { GoatCounterService } from './core/services/goat-counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    // TODO: Add observable to change ltr to rtl when language changes
    constructor(private readonly goatCounterService: GoatCounterService) {}
}
