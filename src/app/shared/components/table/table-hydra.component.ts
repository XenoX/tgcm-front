import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {NgClass, NgFor, NgIf, NgStyle} from "@angular/common";
import {SkeletonLoaderComponent} from "../skeleton-loader/skeleton-loader.component";
import {ApiService} from "../../../services/api.service";
import {HydraCollection} from "../../../interfaces/hydra-collection";
import {RouterLink} from "@angular/router";
import {IconsModule} from "../../../icons/icons.module";
import {HydraPartialCollection} from "../../../interfaces/hydra-partial-collection";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {HydraMember} from "../../../interfaces/hydra-member";

export interface TableColumn {
  key: string; // The key to access the value in the data, can be a path (e.g. 'foo.bar.baz')
  label: string;
  link?: string; // The key to access the uri in the data, can be a path (e.g. 'foo.bar.@id')
  hidden?: boolean;
  classes?: string; // Additional classes to apply to the cell (e.g. 'uk-text-truncate')
  sortable?: boolean;
}

export enum OrderDirection {
  Ascendant = 'ASC',
  Descendant = 'DESC',
}

@Component({
  selector: 'app-table-hydra',
  standalone: true,
  imports: [NgFor, SkeletonLoaderComponent, NgIf, NgClass, RouterLink, IconsModule, NgStyle],
  templateUrl: './table-hydra.component.html',
})
export class TableHydraComponent implements OnInit, OnChanges {
  @Input() uri!: string;
  @Input() columns!: TableColumn[];
  @Input({transform: numberAttribute}) itemsPerPage: number = 15;
  @Input({transform: numberAttribute}) page: number = 1;
  @Input() orderBy: string = 'id';
  @Input() orderDirection: OrderDirection = OrderDirection.Descendant;
  @Input() tableClasses: string = 'uk-table-small uk-table-striped uk-margin-remove';
  @Input({transform: booleanAttribute}) sortable: boolean = true;
  @Input() searchValue?: string;

  private searchSubject = new Subject<string>();

  @Output() totalItemsEvent = new EventEmitter<number>;

  totalItems: number = 0;
  rowCount: number | undefined;
  data: HydraMember[] = [];
  hydraView?: HydraPartialCollection;
  isError: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe({
      next: (searchValue) => {
        this.fetchData(undefined, searchValue);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchValue']) {
      this.page = changes['searchValue'].currentValue !== changes['searchValue'].previousValue ? 1 : this.page;

      if (!this.searchValue && !changes['searchValue'].isFirstChange()) {
        this.fetchData();
        return;
      }

      if (this.searchValue && this.searchValue!.length > 1) {
        this.searchSubject.next(this.searchValue);
      }
    }
  }

  fetchData(uri?: string, searchValue?: string, page?: number) {
    if (searchValue) {
      uri = uri ? uri : `/${this.uri}?order[${this.orderBy}]=${this.orderDirection}&page=${page ?? this.page}&itemsPerPage=${this.itemsPerPage}&search=${searchValue}`;
    } else {
      uri = uri ? uri : `/${this.uri}?order[${this.orderBy}]=${this.orderDirection}&page=${page ?? this.page}&itemsPerPage=${this.itemsPerPage}`;
    }

    this.apiService.get<HydraCollection>(uri)
      .subscribe({
        next: (response: HydraCollection) => {
          this.totalItems = response['hydra:totalItems'];
          this.data = response['hydra:member'];
          this.hydraView = response['hydra:view'];
          this.rowCount = this.data.length;
          this.totalItemsEvent.emit(this.totalItems);
          this.page = page ?? this.page;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
  }

  sort(key: string) {
    if (this.orderBy !== key) {
      this.orderBy = key;
      this.orderDirection = OrderDirection.Descendant;
      this.fetchData();
      return;
    }

    if (OrderDirection.Descendant === this.orderDirection) {
      this.orderDirection = OrderDirection.Ascendant;
    } else if (OrderDirection.Ascendant === this.orderDirection) {
      this.orderBy = 'id';
      this.orderDirection = OrderDirection.Descendant;
    }

    this.fetchData();
  }

  pagination(uri: string, page: number) {
    // this.page = page;
    this.fetchData(uri, undefined, page);
  }

  getCellValue(item: any, key: string): string {
    const keys = key.split('.');
    let value = item;

    for (const k of keys) {
      if (Array.isArray(value)) {
        value = value.map(v => this.getCellValue(v, k));
      } else if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return '';
      }
    }

    if (Array.isArray(value)) {
      return value.join(', ');
    }

    return value;
  }

  protected readonly Array = Array;
  protected readonly OrderDirection = OrderDirection;
  protected readonly Number = Number;
  protected readonly Math = Math;
}
