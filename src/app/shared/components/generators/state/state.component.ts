import {booleanAttribute, Component, Input} from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {State} from '../../../../interfaces/state';
import {HydraCollection} from '../../../../interfaces/hydra-collection';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {IconsModule} from "../../../../icons/icons.module";

@Component({
  selector: 'app-state-generator',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    IconsModule,
  ],
  templateUrl: './state.component.html',
})
export class StateComponent {
  constructor(private apiService: ApiService) { }

  @Input({transform: booleanAttribute}) withList: boolean = true;
  @Input({transform: booleanAttribute}) isResponsive: boolean = false;

  all: State[] = [];
  current: State | null = null;

  ngOnInit() {
    this.apiService.get<HydraCollection<State>>('/states').subscribe(
      data => {
        this.all = data['hydra:member'];
        this.randomize();
      }
    )
  }

  randomize() {
    const state = this.all[Math.floor(Math.random() * this.all.length)];
    if (state.id === this.current?.id) {
      this.randomize();
      return;
    }
    this.current = state;
  }

  show(name: string) {
    this.current = this.all.find(w => w.name === name) || null;
  }
}
