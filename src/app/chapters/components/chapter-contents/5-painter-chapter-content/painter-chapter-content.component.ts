import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RouterLink } from '@angular/router';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { CommonTranslationKey } from '../../../../shared/utils/common-translation-keys.enum';
import { ChapterTocService } from '../../../../shared/services/chapter-toc.service';
import { ConditionGroupComponent } from '../../../../shared/components/condition-group/condition-group.component';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ConditionedContentComponent,
		UnlockConditionComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		UnusedContentComponent,
		RouterLink,
		TranslocoModule,
		ConditionGroupComponent,
	],
	templateUrl: './painter-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PainterChapterContentComponent implements AfterViewInit {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;

	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
