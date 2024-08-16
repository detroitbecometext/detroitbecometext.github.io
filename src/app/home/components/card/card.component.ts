import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input({ required: true }) routerLink: string[] = [];
	@Input({ required: true }) imageSource: string = '';
	@Input({ required: true }) altText: string = '';
	@Input({ required: true }) title: string = '';
	@Input({ required: true }) text: string = '';
}
