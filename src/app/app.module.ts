import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { SafeHtmlPipe } from './models/SafeHtmlPipe';

import { AppComponent } from './app.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapterListComponent,
    ChapterComponent,
    NotFoundComponent,
    SafeHtmlPipe,
    CreditsComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
