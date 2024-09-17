import { Component } from '@angular/core';
import {TableHydraComponent, TableColumn} from "../../../shared/components/table/table-hydra.component";
import {FeatherModule} from "angular-feather-icons";
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [
    TableHydraComponent,
    FeatherModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './monsters.component.html',
})
export class MonstersComponent {
  totalMonsters?: number;
  totalTypes?: number;
  totalLanguages?: number;
  monsterSearch?: string;
  typeSearch?: string;
  languageSearch?: string;

  monsterColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', link: '@id', classes: 'uk-text-bold', sortable: true },
    { key: 'type.name', label: 'Type', sortable: true },
    { key: 'subtypes.name', label: 'Sous-Types' },
    { key: 'languages.name', label: 'Langages' },
    { key: 'alignment.name', label: 'Alignement', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-table-expand' },
  ];
  typeColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-table-expand uk-text-justify' },
  ];
  languageColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-table-expand uk-text-justify' },
  ];
}
