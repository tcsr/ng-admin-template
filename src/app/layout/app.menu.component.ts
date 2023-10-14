import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuService } from './app.menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    menuItems: any[] = [];

    constructor(public layoutService: LayoutService, private menuService: MenuService) { }

    ngOnInit() {
        this.menuItems = this.menuService.getMenuItems();
    }
}
