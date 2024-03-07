import {Route} from '@angular/router';
import {EventsPageComponent} from './components/events-page.component';

export const eventsPage: Route[] = [
    {
        path: '',
        component: EventsPageComponent,
    },
];
