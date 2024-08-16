import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import { Soundtrack } from '../../../shared/models/soundtrack';

@Component({
	selector: 'app-soundtrack-item-details',
	standalone: true,
	imports: [CommonModule, MatDividerModule, TranslocoModule],
	templateUrl: './soundtrack-item-details.component.html',
	styleUrl: './soundtrack-item-details.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundtrackItemDetailsComponent {
	@Input({ required: true }) public item: Soundtrack | null = null;
}
