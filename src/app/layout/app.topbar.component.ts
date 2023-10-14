import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { MenuService } from './app.menu.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  menuItems = [];
  filteredItems = [];
  selectedMenu!: any;
  isSearchActive = false;

  constructor(public layoutService: LayoutService, private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }


  filterItems(event) {
    const query = event.query.toLowerCase();
    const filtered: any[] = [];
    // Recursive function to search through items and their nested items
    const searchItems = (items) => {
      for (const item of items) {
        if (item.label.toLowerCase().includes(query)) {
          filtered.push(item);
        }
        if (item.items) {
          searchItems(item.items); // Recurse into nested items
        }
      }
    };

    // Start searching from the top-level items
    searchItems(this.menuItems);
    this.filteredItems = filtered;
  }

}
