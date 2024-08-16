import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-dialogue-line',
	standalone: true,
	templateUrl: './dialogue-line.component.html',
	styleUrl: './dialogue-line.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogueLineComponent {
	@Input({ required: true }) name: string = ''; // TODO: string union
}
