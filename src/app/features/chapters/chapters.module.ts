import { NgModule } from '@angular/core';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChapterComponent } from './chapter/chapter.component';
import { SharedModule } from '@app/shared/shared.module';
import { ChapterNavComponent } from './shared/components/chapter-nav/chapter-nav.component';
import { TheHostageChapterContentComponent } from './chapter-contents/1-the-hostage-chapter-content/the-hostage-chapter-content.component';
import { OpeningChapterContentComponent } from './chapter-contents/2-opening-chapter-content/opening-chapter-content.component';
import { ShadesColorChapterContentComponent } from './chapter-contents/3-shades-color-chapter-content/shades-color-chapter-content.component';
import { NewHomeChapterContentComponent } from './chapter-contents/4-new-home-chapter-content/new-home-chapter-content.component';
import { PainterChapterContentComponent } from './chapter-contents/5-painter-chapter-content/painter-chapter-content.component';
import { PartnersChapterContentComponent } from './chapter-contents/6-partners-chapter-content/partners-chapter-content.component';
import { StormyNightChapterContentComponent } from './chapter-contents/7-stormy-night-chapter-content/stormy-night-chapter-content.component';
import { BrokenChapterContentComponent } from './chapter-contents/8-broken-chapter-content/broken-chapter-content.component';
import { TheInterrogationChapterContentComponent } from './chapter-contents/9-the-interrogation-chapter-content/the-interrogation-chapter-content.component';
import { FugitivesChapterContentComponent } from './chapter-contents/10-fugitives-chapter-content/fugitives-chapter-content.component';
import { FromTheDeadChapterContentComponent } from './chapter-contents/11-from-the-dead-chapter-content/from-the-dead-chapter-content.component';
import { WaitingForHankChapterContentComponent } from './chapter-contents/12-waiting-for-hank-chapter-content/waiting-for-hank-chapter-content.component';
import { OnTheRunChapterContentComponent } from './chapter-contents/13-on-the-run-chapter-content/on-the-run-chapter-content.component';
import { JerichoChapterContentComponent } from './chapter-contents/14-jericho-chapter-content/jericho-chapter-content.component';
import { TheNestChapterContentComponent } from './chapter-contents/15-the-nest-chapter-content/the-nest-chapter-content.component';
import { TimeToDecideChapterContentComponent } from './chapter-contents/16-time-to-decide-chapter-content/time-to-decide-chapter-content.component';
import { ZlatkoChapterContentComponent } from './chapter-contents/17-zlatko-chapter-content/zlatko-chapter-content.component';
import { RussianRouletteChapterContentComponent } from './chapter-contents/18-russian-roulette-chapter-content/russian-roulette-chapter-content.component';
import { SparePartsChapterContentComponent } from './chapter-contents/19-spare-parts-chapter-content/spare-parts-chapter-content.component';
import { EdenClubChapterContentComponent } from './chapter-contents/20-eden-club-chapter-content/eden-club-chapter-content.component';
import { PiratesCoveChapterContentComponent } from './chapter-contents/21-pirates-cove-chapter-content/pirates-cove-chapter-content.component';
import { TheBridgeChapterContentComponent } from './chapter-contents/22-the-bridge-chapter-content/the-bridge-chapter-content.component';
import { StratfordTowerChapterContentComponent } from './chapter-contents/23-stratford-tower-chapter-content/stratford-tower-chapter-content.component';
import { PublicEnemyChapterContentComponent } from './chapter-contents/24-public-enemy-chapter-content/public-enemy-chapter-content.component';
import { MidnightTrainChapterContentComponent } from './chapter-contents/25-midnight-train-chapter-content/midnight-train-chapter-content.component';
import { CapitolParkChapterContentComponent } from './chapter-contents/26-capitol-park-chapter-content/capitol-park-chapter-content.component';
import { MeetKamskiChapterContentComponent } from './chapter-contents/27-meet-kamski-chapter-content/meet-kamski-chapter-content.component';
import { FreedomMarchChapterContentComponent } from './chapter-contents/28-freedom-march-chapter-content/freedom-march-chapter-content.component';
import { LastChanceConnorChapterContentComponent } from './chapter-contents/29-last-chance-connor-chapter-content/last-chance-connor-chapter-content.component';
import { CrossroadsKaraChapterContentComponent } from './chapter-contents/30.1-crossroads-kara-chapter-content/crossroads-kara-chapter-content.component';
import { CrossroadsConnorChapterContentComponent } from './chapter-contents/30.2-crossroads-connor-chapter-content/crossroads-connor-chapter-content.component';
import { CrossroadsMarkusChapterContentComponent } from './chapter-contents/30.3-crossroads-markus-chapter-content/crossroads-markus-chapter-content.component';
import { NightSoulMarkusChapterContentComponent } from './chapter-contents/31.1-night-soul-markus-chapter-content/night-soul-markus-chapter-content.component';
import { NightSoulConnorChapterContentComponent } from './chapter-contents/31.2-night-soul-connor-chapter-content/night-soul-connor-chapter-content.component';
import { KaraLeavingDetroitChapterContentComponent } from './chapter-contents/32.1-kara-leaving-detroit-chapter-content/kara-leaving-detroit-chapter-content.component';
import { KaraCapturedChapterContentComponent } from './chapter-contents/32.2-kara-captured-chapter-content/kara-captured-chapter-content.component';
import { ConnorsLastMissionChapterContentComponent } from './chapter-contents/32.3-connors-last-mission-chapter-content/connors-last-mission-chapter-content.component';
import { ConnorCyberlifeTowerChapterContentComponent } from './chapter-contents/32.4-connor-cyberlife-tower-chapter-content/connor-cyberlife-tower-chapter-content.component';
import { MarkusDemonstrationChapterContentComponent } from './chapter-contents/32.5-markus-demonstration-chapter-content/markus-demonstration-chapter-content.component';
import { MarkusRevolutionChapterContentComponent } from './chapter-contents/32.6-markus-revolution-chapter-content/markus-revolution-chapter-content.component';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';
import { DialogueLineComponent } from './shared/components/dialogue-line/dialogue-line.component';
import { UnusedContentComponent } from './shared/components/unused-content/unused-content.component';
import { ConditionedContentComponent } from './shared/components/conditioned-content/conditioned-content.component';
import { ChoiceGroupComponent } from './shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from './shared/components/choice-item/choice-item.component';
import { RelationComponent } from './shared/components/relation/relation.component';
import { ObservationComponent } from './shared/components/observation/observation.component';
import { UnlockConditionComponent } from './shared/components/unlock-condition/unlock-condition.component';
import { BackgroundDialoguesComponent } from './chapter-contents/30-crossroads-intro/background-dialogues/background-dialogues.component';
import { ScreensComponent } from './chapter-contents/30-crossroads-intro/screens/screens.component';
import { ChapterLinkComponent } from './shared/components/chapter-link/chapter-link.component';
import { ObservationItemComponent } from './shared/components/observation-item/observation-item.component';
import { EndingsComponent } from './chapter-contents/endings/endings.component';

@NgModule({
    declarations: [
        ChapterComponent,
        ChapterNavComponent,
        TheHostageChapterContentComponent,
        OpeningChapterContentComponent,
        ShadesColorChapterContentComponent,
        NewHomeChapterContentComponent,
        PainterChapterContentComponent,
        PartnersChapterContentComponent,
        StormyNightChapterContentComponent,
        BrokenChapterContentComponent,
        TheInterrogationChapterContentComponent,
        FugitivesChapterContentComponent,
        FromTheDeadChapterContentComponent,
        WaitingForHankChapterContentComponent,
        OnTheRunChapterContentComponent,
        JerichoChapterContentComponent,
        TheNestChapterContentComponent,
        TimeToDecideChapterContentComponent,
        ZlatkoChapterContentComponent,
        RussianRouletteChapterContentComponent,
        SparePartsChapterContentComponent,
        EdenClubChapterContentComponent,
        PiratesCoveChapterContentComponent,
        TheBridgeChapterContentComponent,
        StratfordTowerChapterContentComponent,
        PublicEnemyChapterContentComponent,
        MidnightTrainChapterContentComponent,
        CapitolParkChapterContentComponent,
        MeetKamskiChapterContentComponent,
        FreedomMarchChapterContentComponent,
        LastChanceConnorChapterContentComponent,
        CrossroadsKaraChapterContentComponent,
        CrossroadsMarkusChapterContentComponent,
        CrossroadsConnorChapterContentComponent,
        NightSoulMarkusChapterContentComponent,
        NightSoulConnorChapterContentComponent,
        KaraLeavingDetroitChapterContentComponent,
        KaraCapturedChapterContentComponent,
        ConnorsLastMissionChapterContentComponent,
        ConnorCyberlifeTowerChapterContentComponent,
        MarkusDemonstrationChapterContentComponent,
        MarkusRevolutionChapterContentComponent,
        DialogueLineComponent,
        UnusedContentComponent,
        ConditionedContentComponent,
        ChoiceGroupComponent,
        ChoiceItemComponent,
        RelationComponent,
        ObservationComponent,
        UnlockConditionComponent,
        ScreensComponent,
        BackgroundDialoguesComponent,
        ChapterLinkComponent,
        ObservationItemComponent,
        EndingsComponent,
    ],
    imports: [SharedModule, ChaptersRoutingModule, TranslocoRootModule],
})
export class ChaptersModule {}
