import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GoatCounterService {
	private allowLocal: boolean = false;

	constructor(public router: Router) {
		// Wait for `window.goatcounter` to be available
		const t = setInterval(() => {
			if (
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(window as any).goatcounter &&
				document.visibilityState === 'visible'
			) {
				clearInterval(t);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				this.init((window as any).goatcounter);
			}
		}, 100);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private init(goatcounter: any): void {
		if (this.allowLocal) {
			goatcounter.allow_local = true;
		}

		this.router.events
			.pipe(
				filter(
					(e: Event): e is NavigationEnd =>
						e instanceof NavigationEnd,
				),
			)
			.subscribe(() => {
				goatcounter.count();
			});
	}
}
