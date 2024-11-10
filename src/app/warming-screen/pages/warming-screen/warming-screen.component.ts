import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import { SplitToLiPipe } from '../../pipes/split-to-li.pipe';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		TranslocoModule,
		MatCardModule,
		MatDividerModule,
		SplitToLiPipe,
	],
	templateUrl: './warming-screen.component.html',
	styleUrl: './warming-screen.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarmingScreenComponent {
	public readonly andIds: string[] = [];

	constructor(private readonly viewPortScroller: ViewportScroller) {
		for (let i = 1; i <= 14; i++) {
			this.andIds.push(i.toString().padStart(2, '0'));
		}
	}

	ngOnInit(): void {
		this.viewPortScroller.scrollToPosition([0, 0]);
	}
}
