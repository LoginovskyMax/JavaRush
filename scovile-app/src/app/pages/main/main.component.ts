import { Component } from '@angular/core';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-main',
  imports: [FiltersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
