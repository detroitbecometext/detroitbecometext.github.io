import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ChapterListComponent } from '../app/components/chapter-list/chapter-list.component';
import { ChapterComponent } from '../app/components/chapter/chapter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/chapters', pathMatch: 'full' },
  { path: 'chapters', component: ChapterListComponent },
  { path: 'chapters/:number', component: ChapterComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule 
{

  constructor(private router: Router) 
  {
    //Redirect to 404 on error
    this.router.errorHandler = (error: any) => 
    {
      this.router.navigate(['404']);
    }
  }
}

