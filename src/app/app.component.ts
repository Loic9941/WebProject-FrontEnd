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
  cartCount: number = 0;

  onActivate(component: any): void {
    if (component.productAddedToCart) {
      component.productAddedToCart.subscribe((numberCart: number) => {
        console.log(numberCart);
        this.cartCount = numberCart
      });
    }

    //to do later : manage toast from here
  }
}
