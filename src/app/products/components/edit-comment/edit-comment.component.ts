import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Rating } from '../../interfaces/rating.interface';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css'],
  imports: [FormsModule, CommonModule, RouterLink],
  providers: []

})
export class EditCommentComponent {
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  ratingId!: number;
  commentId!: number;
  rating : Rating = {
    id : 0,
    rate : 0,
    text : '',
    firstName : '',
    lastName : '',
    productName : '',
    createdAt : new Date(),
  }
  constructor(
    private route: ActivatedRoute,
    private ratingService: RatingService,
    private router: Router
  ) {
  }

  ngOnInit(): void {    
    this.ratingId = +this.route.snapshot.paramMap.get('id')!;
    this.commentId = +this.route.snapshot.paramMap.get('commentId')!;
    this.getRating();
  }

  getRating(): void {
    this.ratingService.getRatingById(this.ratingId).subscribe((data) => {
      this.rating = data;
    });
  }

  saveComment(form: NgForm): void {
    if (form.valid) {
      if (this.commentId) {
        this.ratingService.updateComment(this.ratingId, this.commentId, this.rating.commentText || '').subscribe(() => {
          this.showSuccess();
          this.router.navigate(["/artisan/rates"]);
        }
        );
      } else {
        this.ratingService.commentRating(this.ratingId, this.rating.commentText || '').subscribe(() => {
          this.showSuccess();
          this.router.navigate(["/artisan/rates"]);
        });
      }
    }
  }

  showSuccess() {
    this.showSuccessMessage.emit("Commentaire sauvegardé");
  }
}
