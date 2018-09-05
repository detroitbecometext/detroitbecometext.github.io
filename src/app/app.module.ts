import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SafeHtmlPipe } from './models/SafeHtmlPipe';
import { CreditsComponent } from './components/credits/credits.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapterListComponent,
    ChapterComponent,
    NotFoundComponent,
    SafeHtmlPipe,
    CreditsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
