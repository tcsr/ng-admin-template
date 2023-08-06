import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isSearchActive = false;
  isSidebarOpen = false;

  isMobileMenuActive: boolean = false;
  isHeaderNavActive: boolean = false;
  isAppMenuActive: boolean = false;

  items: MenuItem[] = [];

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.adjustSidebar();
  }

  toggleMobileNav() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
    document.querySelector('.app-container')?.classList.toggle('sidebar-mobile-open');
  }

  toggleHeaderNav() {
    this.isHeaderNavActive = !this.isHeaderNavActive;
    // document.querySelector('.app-header__content')?.classList.toggle('header-mobile-open');
  }

  toggleAppMenu() {
    const hamburger = document.querySelector('.mobile-app-menu-btn .hamburger');
    if (hamburger) {
      hamburger.classList.toggle('is-active');
    }
    document.querySelector('.app-inner-layout')?.classList.toggle('open-mobile-menu');
  }

  adjustSidebar() {
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      if (document.body.clientWidth < 1250) {
        appContainer.classList.add('closed-sidebar-mobile', 'closed-sidebar');
      } else {
        appContainer.classList.remove('closed-sidebar-mobile', 'closed-sidebar');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustSidebar();
  }

  constructor() {
    this.adjustSidebar();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
  }


}
