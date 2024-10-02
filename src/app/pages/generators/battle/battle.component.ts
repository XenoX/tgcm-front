import {Component, OnInit} from '@angular/core';
import {IconsModule} from "../../../icons/icons.module";
import {ApiService} from "../../../services/api.service";
import {HydraCollection} from "../../../interfaces/hydra-collection";
import {BattleMakerType} from "../../../interfaces/battle-maker-type";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {SkeletonLoaderComponent} from "../../../shared/components/skeleton-loader/skeleton-loader.component";
import {BattleMaker} from "../../../interfaces/battle-maker";

@Component({
  selector: 'app-battle',
  standalone: true,
  imports: [
    IconsModule,
    NgForOf,
    NgStyle,
    NgIf,
    SkeletonLoaderComponent,
  ],
  templateUrl: './battle.component.html',
})
export class BattleComponent implements OnInit {
  battleMakerTypes: BattleMakerType[] | null = null;
  currentByType: { isLocked: boolean, battleMaker: BattleMaker }[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.get<HydraCollection<BattleMakerType>>(`/battle_maker_types`)
      .subscribe({
        next: (response: HydraCollection<BattleMakerType>) => {
          this.battleMakerTypes = response['hydra:member'];
          this.battleMakerTypes.forEach(type => this.getOneByType(type));
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  getOneByType(type: BattleMakerType) {
    const battleMaker = type.battleMakers[Math.floor(Math.random() * type.battleMakers.length)];

    if (type.battleMakers.length > 1 && battleMaker.name === this.currentByType[type.id]?.battleMaker.name) {
      this.getOneByType(type);
      return;
    }

    this.currentByType[type.id] = { isLocked: false, battleMaker: battleMaker };
  }

  lockBattleMaker(type: BattleMakerType) {
    this.currentByType[type.id].isLocked = !this.currentByType[type.id].isLocked;
  }
}
