import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { ShoppingCart } from '~/app/models/shopping-cart.model';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '~/app/shared/shopping-cart.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  back: boolean = false;
  shoppingCart: ShoppingCart;
  shoppingCartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartSubscription = this.shoppingCartService.shoppingCartSubject.subscribe(
      (shoppingCart: ShoppingCart) => {
        this.shoppingCart = shoppingCart;
      }
    );
  }

  onChooseColor(index: number) {
    dialogs.action({
      message: "Choisissez une couleur",
      cancelButtonText: "Annuler",
      actions: this.shoppingCart[index][0].colors
    }).then(result => {
      this.shoppingCart[index][0].color = result;
    });
  }

  onChooseNicotine(index: number){
    dialogs.action({
      message: "Choisissez un taux de nicotine",
      cancelButtonText: "Annuler",
      actions: this.shoppingCart[index][0].nicotineRates
    }).then(result => {
      this.shoppingCart[index][0].nicotine = result;
    });
  }

  goBack(): void {
  }

  onSettings(): void {
    alert("coucou")
  }

  onRotate(args) {
    let image = <Image>args.object;
    image.animate({
        rotate: 360, 
        duration: 750
    }).then(() => image.rotate = 0);
}

}
