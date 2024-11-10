import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-condition-group',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './condition-group.component.html',
	styleUrl: './condition-group.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionGroupComponent {}
