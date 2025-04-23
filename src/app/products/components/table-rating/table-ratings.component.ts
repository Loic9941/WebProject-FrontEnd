import { Component } from '@angular/core';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-ratings',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-ratings.component.html',
  styleUrl: './table-ratings.component.css'
})
export class TableRatingsComponent {
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
