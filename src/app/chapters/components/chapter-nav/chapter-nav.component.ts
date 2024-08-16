import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChapterNavigationService } from '../../../shared/services/chapter-navigation.service';

@Component({
	selector: 'app-chapter-nav',
	standalone: true,
	imports: [CommonModule, RouterLink, FontAwesomeModule],
	templateUrl: './chapter-nav.component.html',
	styleUrl: './chapter-nav.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterNavComponent {
	faAngleLeft = faAngleLeft;
	faAngleRight = faAngleRight;

	constructor(public readonly navigationService: ChapterNavigationService) {}
}
