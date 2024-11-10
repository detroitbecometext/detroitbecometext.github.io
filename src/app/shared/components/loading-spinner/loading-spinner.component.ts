import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-loading-spinner',
	standalone: true,
	imports: [MatProgressSpinnerModule],
	templateUrl: './loading-spinner.component.html',
	styleUrl: './loading-spinner.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {}
