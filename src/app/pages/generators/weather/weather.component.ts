import {Component} from '@angular/core';
import {WeatherGeneratorComponent} from "../../../shared/components/generators/weather/weather-generator.component";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    WeatherGeneratorComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

}
