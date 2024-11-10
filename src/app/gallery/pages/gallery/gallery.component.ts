import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryService } from '../../../shared/services/gallery.service';
import { ItemNavigationCardComponent } from '../../../shared/components/item-navigation-card/item-navigation-card.component';
import { GalleryItemDetailsComponent } from '../../components/gallery-item-details/gallery-item-details.component';
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
			useValue: '/gallery',
		},
		{
			provide: DATA_SERVICE_TOKEN,
			useExisting: GalleryService,
		},
		ItemNavigationService,
	],
	imports: [
		CommonModule,
		ItemNavigationCardComponent,
		GalleryItemDetailsComponent,
	],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	constructor(public readonly galleryService: GalleryService) {}
}
