import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card-container',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-container.component.html',
	styleUrl: './card-container.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {}
