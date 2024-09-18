import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {FeatherModule} from "angular-feather-icons";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ApiService} from "../../../../services/api.service";
import {HydraCollection} from "../../../../interfaces/hydra-collection";
import {Atmosphere} from "../../../../interfaces/atmosphere";

@Component({
  selector: 'app-atmosphere-generator',
  standalone: true,
  imports: [
    FeatherModule,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './atmosphere.component.html',
})
export class AtmosphereComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input({transform: booleanAttribute}) withList: boolean = true;
  @Input({transform: booleanAttribute}) isResponsive: boolean = false;

  all: Atmosphere[] = [];
  current: Atmosphere | null = null;

  ngOnInit() {
    this.apiService.get<HydraCollection<Atmosphere>>('/atmospheres').subscribe(
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
