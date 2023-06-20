import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  collapsed = true;
  navData = navbarData;

    // SIDEBAR NAVIGATION CLOSING METHOD
  closeSidenav(): void {

  }

  // SIDEBAR TOGGLE COLLAPSING  METHOD
  toggleCollapse(): void {

  }
}
