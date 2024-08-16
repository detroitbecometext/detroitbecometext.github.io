import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-choice-group',
	standalone: true,
	templateUrl: './choice-group.component.html',
	styleUrl: './choice-group.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceGroupComponent {}
