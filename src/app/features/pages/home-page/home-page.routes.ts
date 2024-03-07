import {Route} from '@angular/router';
import {HomePageComponent} from './components/home-page.component';

export const homePage: Route[] = [
    {
        path: '',
        component: HomePageComponent,
    },
];
