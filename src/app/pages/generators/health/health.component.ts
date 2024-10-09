import {Component} from '@angular/core';
import {MoodComponent} from '../../../shared/components/generators/mood/mood.component';
import {StateComponent} from '../../../shared/components/generators/state/state.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [
    MoodComponent,
    StateComponent,
  ],
  templateUrl: './health.component.html',
})
export class HealthComponent {

}
