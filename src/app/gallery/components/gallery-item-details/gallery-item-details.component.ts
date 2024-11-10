import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryItem } from '../../../shared/models/gallery-item';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-gallery-item-details',
	standalone: true,
	imports: [CommonModule, MatDividerModule, MatCardModule, TranslocoModule],
	templateUrl: './gallery-item-details.component.html',
	styleUrl: './gallery-item-details.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryItemDetailsComponent {
	@Input({ required: true }) public item: GalleryItem | null = null;
}
