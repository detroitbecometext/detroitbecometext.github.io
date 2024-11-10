import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { RouterLink } from '@angular/router';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { ChapterTocService } from '../../../../shared/services/chapter-toc.service';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { ObservationComponent } from '../../../../shared/components/observation/observation.component';
import { ObservationItemComponent } from '../../../../shared/components/observation-item/observation-item.component';
import { ConditionGroupComponent } from '../../../../shared/components/condition-group/condition-group.component';

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
		UnusedContentComponent,
		ObservationComponent,
		ObservationItemComponent,
		ConditionGroupComponent,
	],
	templateUrl: './meet-kamski-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetKamskiChapterContentComponent implements AfterViewInit {
	UnlockType = UnlockType;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
