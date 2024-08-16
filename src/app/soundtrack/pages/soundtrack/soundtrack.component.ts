import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SoundtrackService } from '../../../shared/services/soundtrack.service';
import { SoundtrackItemDetailsComponent } from '../../components/soundtrack-item-details/soundtrack-item-details.component';
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
			useValue: '/soundtrack',
		},
		{
			provide: DATA_SERVICE_TOKEN,
			useExisting: SoundtrackService,
		},
		ItemNavigationService,
	],
	imports: [
		CommonModule,
		ItemNavigationCardComponent,
		SoundtrackItemDetailsComponent,
	],
	templateUrl: './soundtrack.component.html',
	styleUrl: './soundtrack.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundtrackComponent {
	constructor(public readonly soundtrackService: SoundtrackService) {}
}
