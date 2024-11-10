import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-navigation-link',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule, RouterLink],
	templateUrl: './navigation-link.component.html',
	styleUrl: './navigation-link.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinkComponent {
	@Input({ required: true }) public position: 'start' | 'end' = 'start';
	@Input({ required: true }) public label: string = '';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input({ required: true }) public link: string | any[] = [];

	faAngleLeft = faAngleLeft;
	faAngleRight = faAngleRight;

	constructor(public readonly translocoService: TranslocoService) {}
}
