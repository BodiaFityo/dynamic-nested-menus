import {Component, inject} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {MenuFacade} from '../menu.facade';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'dnm-menu',
    standalone: true,
    imports: [CommonModule, RouterLink, NgbModule, MenuItemComponent],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent {
    menuItems = inject(MenuFacade).menuItems;

    isNavbarOpen = false;

    toggleNavbar(): void {
        this.isNavbarOpen = !this.isNavbarOpen;
    }
}
