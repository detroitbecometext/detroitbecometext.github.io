import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-conditioned-content',
	standalone: true,
	templateUrl: './conditioned-content.component.html',
	styleUrl: './conditioned-content.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionedContentComponent {}
