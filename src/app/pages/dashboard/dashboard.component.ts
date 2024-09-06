import {Component} from '@angular/core';
import {TableHydraComponent, TableColumn} from "../../shared/components/table/table-hydra.component";
import {RouterLink} from "@angular/router";
import {IconsModule} from "../../icons/icons.module";
import {WeatherGeneratorComponent} from "../../shared/components/generators/weather/weather-generator.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableHydraComponent,
    RouterLink,
    IconsModule,
    WeatherGeneratorComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  characterColumns: TableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'race.name', label: 'Race' },
    { key: 'class.name', label: 'Classe' }
  ];

  monsterColumns: TableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'type.name', label: 'Type' },
    { key: 'subtypes.name', label: 'Sous-types' },
  ];

  questColumns: TableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'difficulty', label: 'Difficulté', classes: 'uk-text-capitalize' },
  ];

  riddleColumns: TableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'difficulty', label: 'Difficulté', classes: 'uk-text-capitalize' },
  ];

  musicColumns: TableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'ambient', label: 'Ambiance' },
  ];
}
