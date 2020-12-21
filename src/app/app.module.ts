// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@components/home/home.component';
import { ChapterComponent } from '@components/chapters/chapter/chapter.component';
import { CreditsComponent } from '@components/credits/credits.component';
import { ContactComponent } from '@app/features/contact/contact.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';

// Icons
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
    faInfoCircle,
    faCircleNotch,
    faBars,
    faSkull,
    faHourglassHalf,
    faUnlock,
    faEnvelope,
    faQuestion,
    faHome,
    faTv,
    faCheck,
    faTimes,
    faEllipsisH,
    faLockOpen,
    faAngleRight,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

// Core and Shared
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ChapterComponent,
        CreditsComponent,
        ContactComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
        CoreModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private faIconLibrary: FaIconLibrary) {
        faIconLibrary.addIcons(
            faInfoCircle,
            faCircleNotch,
            faBars,
            faSkull,
            faHourglassHalf,
            faUnlock,
            faEnvelope,
            faQuestion,
            faHome,
            faTv,
            faCheck,
            faTimes,
            faEllipsisH,
            faLockOpen,
            faAngleRight,
            faAngleLeft
        );
    }
}
