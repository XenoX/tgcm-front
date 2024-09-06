import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {OffcanvasComponent} from "./shared/layout/offcanvas/offcanvas.component";
import {SidebarComponent} from "./shared/layout/sidebar/sidebar.component";
import {HeaderComponent} from "./shared/layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, OffcanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
