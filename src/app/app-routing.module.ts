import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './features/layout/base-layout/base-layout.component';

const routes: Routes = [
    // Home
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./features/home/home.module').then((m) => m.HomeModule),
    },
    // Other pages
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: 'contact',
                loadChildren: () =>
                    import('./features/contact/contact.module').then(
                        (m) => m.ContactModule
                    ),
            },
            {
                path: 'chapters',
                loadChildren: () =>
                    import('./features/chapters/chapters.module').then(
                        (m) => m.ChaptersModule
                    ),
            },
            {
                path: 'not-found',
                loadChildren: () =>
                    import('./features/not-found/not-found.module').then(
                        (m) => m.NotFoundModule
                    ),
            },
            {
                path: 'credits',
                loadChildren: () =>
                    import('./features/credits/credits.module').then(
                        (m) => m.CreditsModule
                    ),
            },
        ],
    },

    // Redirect to 404
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
