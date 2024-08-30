import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';

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
}
