import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-observation-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './observation-item.component.html',
	styleUrl: './observation-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationItemComponent {
	@Input({ required: true }) title: string = '';
	@Input({ required: true }) subline1: string = '';
	@Input({ required: true }) subline2: string = '';
}
