import { Component } from '@angular/core';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-table-ratings',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-ratings.component.html',
  styleUrl: './table-ratings.component.css'
})
export class TableRatingsComponent {
  ratings: Rating[] = [];

  constructor(
    private ratingService: RatingService,
    private authService: AuthService
  ) {
    
  }

  ngOnInit(): void {
    this.ratingService.getRatings().subscribe((data) => {
      this.ratings = data;
    });
  }

  showActions(): boolean {
    return this.authService.isArtisan();
  }

  
}
