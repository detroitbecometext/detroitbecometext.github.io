import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-observation',
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: './observation.component.html',
	styleUrl: './observation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationComponent {
	@Input({ required: true }) label: string = '';

	faSearch = faSearch;
}
