import {Injectable, inject} from '@angular/core';
import {MenuService} from './services/menu.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class MenuFacade {
    private $menuItems = inject(MenuService).getMenuItems();

    readonly menuItems = toSignal(this.$menuItems);
}
