import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { UnusedContentComponent } from '../../../shared/components/unused-content/unused-content.component';
import { ChoiceGroupComponent } from '../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../shared/components/choice-item/choice-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		UnusedContentComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		MatDividerModule,
		MatCardModule,
		TranslocoModule,
	],
	templateUrl: './chloe.component.html',
	styleUrl: './chloe.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChloeComponent {
	constructor(protected readonly translationService: TranslationService) {}
}
