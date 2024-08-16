import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-choice-item',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './choice-item.component.html',
	styleUrl: './choice-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceItemComponent {
	@Input({ required: true }) public choiceLabel: string = '';
	@Input() public brackets: boolean = false;
	@Input() public timeOutOption: boolean = false;

	faHourglassEnd = faHourglassEnd;
}
