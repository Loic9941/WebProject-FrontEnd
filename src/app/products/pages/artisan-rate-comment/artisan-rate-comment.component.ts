import { Component, EventEmitter, Output } from '@angular/core';
import { EditCommentComponent } from "../../components/edit-comment/edit-comment.component";

@Component({
  selector: 'app-artisan-rate-comment',
  imports: [EditCommentComponent],
  templateUrl: './artisan-rate-comment.component.html',
  styleUrl: './artisan-rate-comment.component.css'
})
export class ArtisanRateCommentComponent {
    @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();
    
    showSuccessMessageEmit(message: string) {
      this.showSuccessMessage.emit(message);
    }
}
