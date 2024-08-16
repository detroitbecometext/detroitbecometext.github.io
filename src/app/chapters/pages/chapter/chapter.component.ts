import { CommonModule, ViewportScroller } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	HostListener,
	Signal,
} from '@angular/core';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { TranslocoModule } from '@jsverse/transloco';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChapterNavComponent } from '../../components/chapter-nav/chapter-nav.component';
import { ChapterNavigationService } from '../../../shared/services/chapter-navigation.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Component({
	standalone: true,
	providers: [ChapterNavigationService],
	imports: [
		CommonModule,
		MatCardModule,
		MatDividerModule,
		ChapterNavComponent,
		TranslocoModule,
		PortalModule,
	],
	templateUrl: './chapter.component.html',
	styleUrl: './chapter.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public readonly portal: Signal<ComponentPortal<any> | null> = computed(
		() => {
			const currentItem = this.navigationService.currentItem();

			if (currentItem !== null) {
				return new ComponentPortal(currentItem.component);
			}

			return null;
		},
	);

	constructor(
		protected readonly navigationService: ChapterNavigationService,
		private readonly route: ActivatedRoute,
		private readonly viewPortScroller: ViewportScroller,
	) {
		this.route.paramMap
			.pipe(takeUntilDestroyed())
			.subscribe((params: ParamMap) => {
				this.navigationService.onPathIdChanged(params.get('id'));
			});

		toObservable(this.portal)
			.pipe(takeUntilDestroyed())
			.subscribe((portal) => {
				if (portal !== null) {
					this.viewPortScroller.scrollToPosition([0, 0]);
				}
			});
	}

	@HostListener('window:keyup', ['$event'])
	itemNavigationEvent(event: KeyboardEvent) {
		this.navigationService.onNavigationEvent(event);
	}
}
