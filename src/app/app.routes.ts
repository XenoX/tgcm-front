import {Routes} from '@angular/router';
import {CharactersComponent} from "./pages/database/characters/characters.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MonstersComponent} from "./pages/database/monsters/monsters.component";
import {EnvironmentsComponent} from "./pages/generators/environments/environments.component";
import {StatesComponent} from "./pages/database/states/states.component";
import {BattleComponent} from "./pages/generators/battle/battle.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  // Database
  { path: 'characters', component: CharactersComponent, pathMatch: 'full' },
  { path: 'monsters', component: MonstersComponent, pathMatch: 'full' },
  { path: 'states', component: StatesComponent, pathMatch: 'full' },
  // Generators
  { path: 'battle-maker', component: BattleComponent, pathMatch: 'full' },
  // Randomizers
  { path: 'environments', component: EnvironmentsComponent, pathMatch: 'full' },
];
