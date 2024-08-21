import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ChapterNavigationService } from '../../../shared/services/chapter-navigation.service';
import { NavigationLinkComponent } from '../../../shared/components/navigation-link/navigation-link.component';

@Component({
	selector: 'app-chapter-nav',
	standalone: true,
	imports: [CommonModule, NavigationLinkComponent],
	templateUrl: './chapter-nav.component.html',
	styleUrl: './chapter-nav.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterNavComponent {
	faAngleLeft = faAngleLeft;
	faAngleRight = faAngleRight;

	constructor(public readonly navigationService: ChapterNavigationService) {}
}
