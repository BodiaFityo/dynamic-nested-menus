import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/pages/home-page/home-page.routes').then(
                (m) => m.homePage
            ),
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./features/pages/about-page/aboute-page.routes').then(
                (m) => m.aboutPage
            ),
    },
    {
        path: 'events',
        loadChildren: () =>
            import('./features/pages/events-page/events-page.routes').then(
                (m) => m.eventsPage
            ),
    },
    {
        path: 'media',
        loadChildren: () =>
            import('./features/pages/media-page/media-page.routes').then(
                (m) => m.mediaPage
            ),
    },
    {
        path: 'awards',
        loadChildren: () =>
            import('./features/pages/awards-page/awards-page.routes').then(
                (m) => m.awardsPage
            ),
    },
];
