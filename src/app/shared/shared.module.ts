import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';
import { DialogueLineComponent } from './components/dialogue-line/dialogue-line.component';
import { UnusedContentComponent } from './components/unused-content/unused-content.component';
import { ConditionedContentComponent } from './components/conditioned-content/conditioned-content.component';
import { ChoiceGroupComponent } from './components/choice-group/choice-group.component';
import { ChoiceItemComponent } from './components/choice-item/choice-item.component';
import { RelationComponent } from './components/relation/relation.component';
import { ObservationComponent } from './components/observation/observation.component';
import { UnlockConditionComponent } from './components/unlock-condition/unlock-condition.component';
import { ObservationItemComponent } from './components/observation-item/observation-item.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';

@NgModule({
    declarations: [
        DialogueLineComponent,
        UnusedContentComponent,
        ConditionedContentComponent,
        ChoiceGroupComponent,
        ChoiceItemComponent,
        RelationComponent,
        ObservationComponent,
        UnlockConditionComponent,
        ObservationItemComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        IconsModule,
        TranslocoRootModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        IconsModule,
        DialogueLineComponent,
        UnusedContentComponent,
        ConditionedContentComponent,
        ChoiceGroupComponent,
        ChoiceItemComponent,
        RelationComponent,
        ObservationComponent,
        UnlockConditionComponent,
        ObservationItemComponent,
        TranslocoRootModule,
    ],
})
export class SharedModule {}
