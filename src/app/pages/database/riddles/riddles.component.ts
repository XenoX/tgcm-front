import { Component } from "@angular/core";
import { TableColumn, TableHydraComponent } from "../../../shared/components/table/table-hydra.component";
import { FeatherModule } from "angular-feather-icons";
import { NgIf } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-riddles',
  standalone: true,
  imports: [
    TableHydraComponent,
    FeatherModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './riddles.component.html',
})

export class RiddlesComponents{
  totalRiddles?: number;
  riddleSearch?:string;

  riddleColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', link: '@id', classes: 'uk-text-bold', sortable: true },
    { key: 'difficulty', label: 'Difficulté', classes: 'uk-text-bold', sortable: true },
  ]
}