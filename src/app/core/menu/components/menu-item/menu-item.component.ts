import {
    Component,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
    inject,
} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MenuItem} from '../../models/menu.model';

@Component({
    selector: 'dnm-menu-item',
    standalone: true,
    imports: [CommonModule, RouterLink, NgClass],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
    @Input() menuItem!: MenuItem;

    elementRef = inject(ElementRef);
    renderer = inject(Renderer2);

    isDropdownOpen = false;

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.elementRef.nativeElement, 'show');
            this.isDropdownOpen = false;
        }
    }

    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}
