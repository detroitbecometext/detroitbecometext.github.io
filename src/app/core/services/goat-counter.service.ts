import { Injectable, isDevMode } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GoatCounterService {
    private allowLocal = isDevMode();

    constructor(public router: Router) {
        // Wait for `window.goatcounter` to be available
        let t = setInterval(() => {
            if (
                (window as any).goatcounter &&
                document.visibilityState === 'visible'
            ) {
                clearInterval(t);
                this.init((window as any).goatcounter);
            }
        }, 100);
    }

    private init(goatcounter: any): void {
        if (this.allowLocal) {
            goatcounter.allow_local = true;
        }

        this.router.events
            .pipe(
                filter(
                    (e: RouterEvent): e is NavigationEnd =>
                        e instanceof NavigationEnd
                )
            )
            .subscribe((e: NavigationEnd) => {
                goatcounter.count();
            });
    }
}
