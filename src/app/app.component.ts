import { Component } from '@angular/core';
import { ContainerComponent } from './shared/components/container/container.component';

@Component({
  selector: 'app-root',
  imports: [ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEnd';
}
