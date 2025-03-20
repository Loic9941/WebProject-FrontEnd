import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarWrapperComponent } from './shared/components/navbar-wrapper/navbar-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEnd';
}
