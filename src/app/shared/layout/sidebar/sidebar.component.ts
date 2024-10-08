import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IconsModule} from "../../../icons/icons.module";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconsModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
