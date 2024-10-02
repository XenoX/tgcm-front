import {Component, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.css'
})
export class SkeletonLoaderComponent {
  @Input() width: string = '100%';
  @Input() height: string = '0.7rem';
  @Input() type: string = 'text';
  @Input() class: string = '';
}
