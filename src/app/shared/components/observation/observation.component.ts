import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TextDirectionService } from '../../services/text-direction.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-observation',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './observation.component.html',
	styleUrl: './observation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationComponent {
	@Input({ required: true }) label: string = '';

	faSearch = faSearch;

	constructor(public readonly textDirectionService: TextDirectionService) {}
}
