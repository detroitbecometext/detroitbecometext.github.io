import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Magazine } from '../../../shared/models/magazine';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../shared/services/translation.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-magazine-item-details',
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatCardModule,
		MatChipsModule,
		MatDividerModule,
		TranslocoModule,
	],
	templateUrl: './magazine-item-details.component.html',
	styleUrl: './magazine-item-details.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagazineItemDetailsComponent {
	@Input({ required: true }) public item: Magazine | null = null;

	constructor(protected readonly translationService: TranslationService) {}
}
