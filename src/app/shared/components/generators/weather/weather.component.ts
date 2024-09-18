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
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input({transform: booleanAttribute}) withList: boolean = true;
  @Input({transform: booleanAttribute}) isResponsive: boolean = false;

  all: Weather[] = [];
  current: Weather | null = null;

  ngOnInit() {
    this.apiService.get<HydraCollection<Weather>>('/weathers').subscribe(
      data => {
        this.all = data['hydra:member'];
        this.randomize();
      }
    );
  }

  randomize() {
    const weather = this.all[Math.floor(Math.random() * this.all.length)];
    if (weather.id === this.current?.id) {
      this.randomize();
      return;
    }

    this.current = weather;
  }

  show(name: string) {
    this.current = this.all.find(w => w.name === name) || null;
  }
}
