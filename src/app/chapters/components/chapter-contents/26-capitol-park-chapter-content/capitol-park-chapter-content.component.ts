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
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { CommonTranslationKey } from '../../../../shared/utils/common-translation-keys.enum';
import { ObservationComponent } from '../../../../shared/components/observation/observation.component';
import { ObservationItemComponent } from '../../../../shared/components/observation-item/observation-item.component';
import { ChapterTocService } from '../../../services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		ConditionedContentComponent,
		RelationComponent,
		UnlockConditionComponent,
		RouterLink,
		TranslocoModule,
		ObservationComponent,
		ObservationItemComponent,
	],
	templateUrl: './capitol-park-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitolParkChapterContentComponent implements AfterViewInit {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;
	RelationType = RelationType;
	RelationName = RelationName;

	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
