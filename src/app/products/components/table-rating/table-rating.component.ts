import { Component } from '@angular/core';
import { Rating } from '../../interfaces/rating.interface';

@Component({
  selector: 'app-table-rating',
  imports: [],
  templateUrl: './table-rating.component.html',
  styleUrl: './table-rating.component.css'
})
export class TableRatingComponent {
  ratings: Rating[] = [];
}
