import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ConditionedContentComponent } from '../../../../../shared/components/conditioned-content/conditioned-content.component';
import { UnlockConditionComponent } from '../../../../../shared/components/unlock-condition/unlock-condition.component';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../../../shared/services/translation.service';
import { UnlockType } from '../../../../../shared/enums/unlock-type.enum';

@Component({
	selector: 'app-background-dialogues',
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		ConditionedContentComponent,
		UnlockConditionComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './background-dialogues.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundDialoguesComponent {
	UnlockType = UnlockType;

	constructor(protected readonly translationService: TranslationService) {}
}
