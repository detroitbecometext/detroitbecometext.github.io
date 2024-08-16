import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
	standalone: true,
	imports: [MatCardModule, MatDividerModule],
	templateUrl: './credits.component.html',
	styleUrl: './credits.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditsComponent {}
