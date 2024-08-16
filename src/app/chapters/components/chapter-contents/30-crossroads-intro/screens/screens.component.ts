import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { UnlockConditionComponent } from '../../../../../shared/components/unlock-condition/unlock-condition.component';
import { ConditionedContentComponent } from '../../../../../shared/components/conditioned-content/conditioned-content.component';
import { DialogueLineComponent } from '../../../../../shared/components/dialogue-line/dialogue-line.component';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../../../shared/services/translation.service';
import { UnlockType } from '../../../../../shared/enums/unlock-type.enum';
import { CommonTranslationKey } from '../../../../../shared/utils/common-translation-keys.enum';

@Component({
	selector: 'app-screens',
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		UnlockConditionComponent,
		ConditionedContentComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './screens.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreensComponent {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;

	constructor(protected readonly translationService: TranslationService) {}
}
