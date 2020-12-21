import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { ChapterComponent } from '@components/chapters/chapter/chapter.component';
import { CreditsComponent } from '@components/credits/credits.component';
import { ContactComponent } from '@app/features/contact/contact.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { BaseLayoutComponent } from './components/layouts/base-layout/base-layout.component';

const routes: Routes = [
    // Home
    { path: '', redirectTo: '/chapters', pathMatch: 'full' },
    { path: 'chapters', component: HomeComponent },
    // Other pages
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            { path: 'chapters/:id', component: ChapterComponent },
            { path: 'credits', component: CreditsComponent },
            { path: 'contact', component: ContactComponent },
            { path: '404', component: NotFoundComponent },
        ],
    },
    {
        path: 'contact',
        loadChildren: () =>
            import('./features/contact/contact.module').then(
                (m) => m.ContactModule
            ),
    },
    // Redirect to 404
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
