import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { MatCardModule } from '@angular/material/card';
import { DialogueLineComponent } from '../../../shared/components/dialogue-line/dialogue-line.component';
import { UnlockConditionComponent } from '../../../shared/components/unlock-condition/unlock-condition.component';
import { ConditionedContentComponent } from '../../../shared/components/conditioned-content/conditioned-content.component';
import { RouterLink } from '@angular/router';
import { UnusedContentComponent } from '../../../shared/components/unused-content/unused-content.component';
import { MatDividerModule } from '@angular/material/divider';
import { RelationComponent } from '../../../shared/components/relation/relation.component';
import { TranslationService } from '../../../shared/services/translation.service';
import { RelationName } from '../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../shared/enums/unlock-type.enum';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatCardModule,
		DialogueLineComponent,
		UnlockConditionComponent,
		ConditionedContentComponent,
		RouterLink,
		UnusedContentComponent,
		MatDividerModule,
		RelationComponent,
		TranslocoModule,
	],
	templateUrl: './endings.component.html',
	styleUrl: './endings.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndingsComponent {
	UnlockType = UnlockType;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(protected readonly translationService: TranslationService) {}
}
