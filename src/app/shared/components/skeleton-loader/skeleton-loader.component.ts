import { Component, Input } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [
    NgStyle
  ],
  template: '<div class="skeleton skeleton-text" [ngStyle]="{\'width\': width}"></div>',
  styleUrl: './skeleton-loader.component.css'
})
export class SkeletonLoaderComponent {
  @Input() width: string = '100%';
}
