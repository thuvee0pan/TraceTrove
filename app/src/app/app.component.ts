import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './features/dashboard/dashboard.component';
// import { faUser } from '@font-awesome/free-solid-svg-icon
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faChartBar,
  faComment,
  faBookmark,
  faUser,
  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    MatSidenavModule,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  home = faHome;
  chart = faChartBar;
  message = faComment;
  bookmark = faBookmark;
  user = faUser;
}
