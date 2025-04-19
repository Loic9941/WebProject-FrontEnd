import { Component } from '@angular/core';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-rating',
  imports: [CommonModule],
  templateUrl: './table-rating.component.html',
  styleUrl: './table-rating.component.css'
})
export class TableRatingComponent {
  ratings: Rating[] = [];

  constructor(
    private ratingService: RatingService
  ) {
    
  }

  ngOnInit(): void {
    this.ratingService.getRatings().subscribe((data) => {
      this.ratings = data;
    });
  }

  
}
