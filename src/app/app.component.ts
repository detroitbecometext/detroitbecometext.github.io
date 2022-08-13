import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoatCounterService } from './core/services/goat-counter.service';
import { ThemePickerService } from './core/services/theme-picker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
    // TODO: Add observable to change ltr to rtl when language changes
    private subscription: Subscription;

    constructor(
        private readonly goatCounterService: GoatCounterService,
        public readonly themePickerService: ThemePickerService,
        private renderer: Renderer2
    ) {
        this.subscription = this.themePickerService.isDark$.subscribe(
            (value) => {
                if (value === true) {
                    this.renderer.removeClass(document.body, 'light');
                    this.renderer.addClass(document.body, 'dark');
                } else {
                    this.renderer.removeClass(document.body, 'dark');
                    this.renderer.addClass(document.body, 'light');
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
