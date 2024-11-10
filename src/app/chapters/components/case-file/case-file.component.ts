import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';

type SuspectValue = 'SUSPECT' | 'MISSING' | 'DESTROYED';

@Component({
	selector: 'app-case-file',
	standalone: true,
	imports: [TranslocoModule, MatDividerModule],
	templateUrl: './case-file.component.html',
	styleUrl: './case-file.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseFileComponent {
	@Input({ required: true }) caseNumber: string = '';

	public readonly caseSuspect: Map<string, SuspectValue> = new Map<
		string,
		SuspectValue
	>([
		['01', 'MISSING'],
		['02', 'SUSPECT'],
		['03', 'SUSPECT'],
		['04', 'MISSING'],
		['05', 'DESTROYED'],
		['06', 'SUSPECT'],
	]);
}
