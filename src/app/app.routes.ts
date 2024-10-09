import {Routes} from '@angular/router';
import {CharactersComponent} from "./pages/database/characters/characters.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MonstersComponent} from "./pages/database/monsters/monsters.component";
import {EnvironmentsComponent} from "./pages/generators/environments/environments.component";
import {StatesComponent} from "./pages/database/states/states.component";
import {HealthComponent} from './pages/generators/health/health.component';
import { RiddlesComponents } from './pages/database/riddles/riddles.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent, pathMatch: 'full' },
  { path: 'monsters', component: MonstersComponent, pathMatch: 'full' },
  { path: 'states', component: StatesComponent, pathMatch: 'full' },
  { path: 'riddles', component: RiddlesComponents,pathMatch:'full'},
  { path: 'environments', component: EnvironmentsComponent, pathMatch: 'full' },
  { path: 'health', component: HealthComponent, pathMatch: 'full'}
];
