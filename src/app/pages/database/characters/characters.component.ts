import {Component} from '@angular/core';
import {TableHydraComponent, TableColumn} from "../../../shared/components/table/table-hydra.component";
import {FeatherModule} from "angular-feather-icons";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    TableHydraComponent,
    FeatherModule,
    RouterLink,
    NgIf,
    FormsModule,
  ],
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  totalCharacters?: number;
  totalRaces?: number;
  totalClasses?: number;
  characterSearch?: string;
  raceSearch?: string;
  classSearch?: string;

  characterColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', link: '@id', classes: 'uk-text-bold', sortable: true },
    { key: 'race.name', label: 'Race', sortable: true},
    { key: 'class.name', label: 'Classe', sortable: true },
    { key: 'languages.name', label: 'Langages' },
    { key: 'description', label: 'Description', classes: 'uk-text-expand uk-text-justify' },
  ];

  racesColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-text-expand uk-text-justify' },
  ];

  classesColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-text-expand uk-text-justify' },
  ];
}
