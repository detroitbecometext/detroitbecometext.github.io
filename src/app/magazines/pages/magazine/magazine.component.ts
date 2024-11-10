import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MagazineService } from '../../../shared/services/magazine.service';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MagazineItemDetailsComponent } from '../../components/magazine-item-details/magazine-item-details.component';
import { ItemNavigationCardComponent } from '../../../shared/components/item-navigation-card/item-navigation-card.component';
import {
	DATA_SERVICE_TOKEN,
	ITEM_URL_TOKEN,
	ItemNavigationService,
} from '../../../shared/services/item-navigation.service';

@Component({
	standalone: true,
	providers: [
		{
			provide: ITEM_URL_TOKEN,
			useValue: '/magazines',
		},
		{
			provide: DATA_SERVICE_TOKEN,
			useExisting: MagazineService,
		},
		ItemNavigationService,
	],
	imports: [
		CommonModule,
		MatDividerModule,
		MatCardModule,
		RouterLink,
		MatChipsModule,
		FontAwesomeModule,
		TranslocoModule,
		MagazineItemDetailsComponent,
		ItemNavigationCardComponent,
	],
	templateUrl: './magazine.component.html',
	styleUrl: './magazine.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagazineComponent {
	constructor(public readonly magazineService: MagazineService) {}
}
