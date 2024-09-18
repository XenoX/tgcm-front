import {Component} from '@angular/core';
import {WeatherComponent} from "../../../shared/components/generators/weather/weather.component";
import {AtmosphereComponent} from "../../../shared/components/generators/atmosphere/atmosphere.component";

@Component({
  selector: 'app-environments',
  standalone: true,
  imports: [
    WeatherComponent,
    AtmosphereComponent,
  ],
  templateUrl: './environments.component.html',
})
export class EnvironmentsComponent {

}
