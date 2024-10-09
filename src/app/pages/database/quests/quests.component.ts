import { Component } from "@angular/core";
import { TableColumn, TableHydraComponent } from "../../../shared/components/table/table-hydra.component";
import { FeatherModule } from "angular-feather-icons";
import { NgIf } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [
    TableHydraComponent,
    FeatherModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './quests.component.html'
})
export class QuestsComponent {
  totalQuests?: number;
  questSearch?: string;

  questColumns: TableColumn[] = [
    {key: 'name', label: 'Nom', link: '@id', classes: 'uk-text-bold', sortable: true},
    {key: 'difficulty', label: 'Difficulté', sortable: true},
  ]
}