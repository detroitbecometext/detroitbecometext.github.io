import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
	selector: 'app-dialogue-line',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dialogue-line.component.html',
	styleUrl: './dialogue-line.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogueLineComponent {
	@Input({ required: true }) name: string = '';

	constructor(public readonly translocoService: TranslocoService) {}
}
