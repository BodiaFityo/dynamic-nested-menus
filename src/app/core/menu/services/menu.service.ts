import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {MenuItem} from '../models/menu.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    http = inject(HttpClient);

    getMenuItems(): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>('/assets/menu-data/data.json');
    }
}
