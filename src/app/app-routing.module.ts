import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './modules/layout/base-layout/base-layout.component';

const routes: Routes = [
    // Home
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    // Other pages
    {
        path: 'contact',
        loadChildren: () =>
            import('./modules/contact/contact.module').then(
                (m) => m.ContactModule
            ),
    },
    {
        path: 'chapters',
        loadChildren: () =>
            import('./modules/chapters/chapters.module').then(
                (m) => m.ChaptersModule
            ),
    },
    {
        path: 'not-found',
        loadChildren: () =>
            import('./modules/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
    {
        path: 'credits',
        loadChildren: () =>
            import('./modules/credits/credits.module').then(
                (m) => m.CreditsModule
            ),
    },
    {
        path: 'chloe',
        loadChildren: () =>
            import('./modules/chloe/chloe.module').then((m) => m.ChloeModule),
    },
    {
        path: 'magazines',
        loadChildren: () =>
            import('./modules/magazines/magazines.module').then(
                (m) => m.MagazinesModule
            ),
    },
    {
        path: 'gallery',
        loadChildren: () =>
            import('./modules/gallery/gallery.module').then(
                (m) => m.GalleryModule
            ),
    },

    // Redirect to 404
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
