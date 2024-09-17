import {Routes} from '@angular/router';
import {CharactersComponent} from "./pages/database/characters/characters.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MonstersComponent} from "./pages/database/monsters/monsters.component";
import {WeatherComponent} from "./pages/generators/weather/weather.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent, pathMatch: 'full' },
  { path: 'monsters', component: MonstersComponent, pathMatch: 'full' },
  { path: 'weathers', component: WeatherComponent, pathMatch: 'full' },
];
