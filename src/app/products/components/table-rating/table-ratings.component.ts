import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
  
  ratings: Rating[] = [];

  constructor(
    private ratingService: RatingService,
    private authService: AuthService
  ) {
    
  }

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings(): void {
    this.ratingService.getRatings().subscribe((data) => {
      this.ratings = data;
    });
  }

  showModifyCommentButton(): boolean {
    return this.authService.isArtisan();
  }

  showAddCommentButton(): boolean {
    return this.authService.isArtisan();
  }

  showDeleteButton(): boolean {
    return this.authService.isAdmin();
  }

  deleteRating(ratingId: number): void {
    this.ratingService.deleteRating(ratingId).subscribe(() => {
      this.getRatings();
      this.showSuccessMessage.emit('Note supprimée');
    });
  }
}
