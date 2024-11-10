import { CommonModule, ViewportScroller } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	HostListener,
	signal,
	Signal,
	ViewChild,
	WritableSignal,
} from '@angular/core';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { TranslocoModule } from '@jsverse/transloco';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChapterNavComponent } from '../../components/chapter-nav/chapter-nav.component';
import { ChapterNavigationService } from '../../../shared/services/chapter-navigation.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ChapterTocComponent } from '../../components/chapter-toc/chapter-toc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAlignLeft, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { TextDirectionService } from '../../../shared/services/text-direction.service';
import { MatTooltipModule } from '@angular/material/tooltip';

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
		ChapterTocComponent,
		FontAwesomeModule,
		MatTooltipModule,
	],
	templateUrl: './chapter.component.html',
	styleUrl: './chapter.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterComponent {
	@ViewChild('tocButton', { read: ElementRef })
	tocButtonElement: ElementRef<HTMLElement> | null = null;

	@ViewChild('tocBottomSheet', { read: ElementRef })
	tocBottomSheet: ElementRef<HTMLElement> | null = null;

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

	public readonly tocBottomSheetOpened: WritableSignal<boolean> =
		signal(false);

	readonly faAlignLeft = faAlignLeft;
	readonly faAlignRight = faAlignRight;

	constructor(
		protected readonly navigationService: ChapterNavigationService,
		protected readonly textDirectionService: TextDirectionService,
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

	public toggleToc(): void {
		this.tocBottomSheetOpened.update((opened) => !opened);
	}

	@HostListener('window:keyup', ['$event'])
	itemNavigationEvent(event: KeyboardEvent) {
		this.navigationService.onNavigationEvent(event);
	}

	@HostListener('document:click', ['$event'])
	onDocumentClicked(event: Event) {
		if (!this.tocBottomSheetOpened()) {
			return;
		}

		const target = event.target as Node;

		// If we click on a link or outside the ToC, close it
		const clickedOutside =
			!this.tocBottomSheet?.nativeElement.contains(target) &&
			!this.tocButtonElement?.nativeElement.contains(target);
		const clickedInside =
			this.tocBottomSheet?.nativeElement.contains(target) &&
			target.nodeName === 'A';

		if (clickedOutside || clickedInside) {
			this.tocBottomSheetOpened.set(false);
		}
	}
}
