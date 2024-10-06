import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Mood} from '../../../../interfaces/mood';
import {HydraCollection} from '../../../../interfaces/hydra-collection';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {IconsModule} from "../../../../icons/icons.module";

@Component({
  selector: 'app-mood-generator',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass,
    IconsModule
  ],
  templateUrl: './mood.component.html',
})
export class MoodComponent {
  constructor(private apiService: ApiService) { }

  @Input({transform: booleanAttribute}) withList: boolean = true;
  @Input({transform: booleanAttribute}) isResponsive: boolean = false;

  all: Mood[] = [];
  current: Mood | null = null;

  ngOnInit() {
    this.apiService.get<HydraCollection<Mood>>('/moods').subscribe(
      data => {
        this.all = data['hydra:member'];
        this.randomize();
      }
    )
  }

  randomize() {
    const mood = this.all[Math.floor(Math.random() * this.all.length)];
    if (mood.id === this.current?.id) {
      this.randomize();
      return;
    }
    this.current = mood;
  }

  show(name: string) {
    this.current = this.all.find(w => w.name === name) || null;
  }

}
