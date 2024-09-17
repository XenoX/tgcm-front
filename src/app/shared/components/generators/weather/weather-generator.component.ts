import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Weather} from "../../../../interfaces/weather";
import {HydraCollection} from "../../../../interfaces/hydra-collection";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {IconsModule} from "../../../../icons/icons.module";

@Component({
  selector: 'app-weather-generator',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass,
    IconsModule
  ],
  templateUrl: './weather-generator.component.html',
})
export class WeatherGeneratorComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input({transform: booleanAttribute}) withList: boolean = true;

  weathers: Weather[] = [];
  currentWeather: Weather | null = null;

  ngOnInit() {
    this.apiService.get<HydraCollection<Weather>>('/weathers').subscribe(
      data => {
        this.weathers = data['hydra:member'];
        this.randomizeWeather();
      }
    );
  }

  randomizeWeather() {
    const weather = this.weathers[Math.floor(Math.random() * this.weathers.length)];
    if (weather.id === this.currentWeather?.id) {
      this.randomizeWeather();
      return;
    }

    this.currentWeather = weather;
  }

  showWeather(weatherName: string) {
    this.currentWeather = this.weathers.find(w => w.name === weatherName) || null;
  }
}
