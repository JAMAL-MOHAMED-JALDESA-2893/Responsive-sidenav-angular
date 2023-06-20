import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<> = new EventEmitter;
  collapsed = false;
  navData = navbarData;

    // SIDEBAR NAVIGATION CLOSING METHOD
  closeSidenav(): void {
    this.collapsed = false;
  }

  // SIDEBAR TOGGLE COLLAPSING  METHOD
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
