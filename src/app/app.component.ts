import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ShoppingCartService } from "./shared/shopping-cart.service";
import { ShoppingCart } from "./models/shopping-cart.model";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    itemsInCart: number;
    itemsSubscription: Subscription;

    constructor(private shoppingCartService: ShoppingCartService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.itemsSubscription = this.shoppingCartService.shoppingCartSubject.subscribe(
            (cart: ShoppingCart) => {
                this.itemsInCart = 0;
                for(let i = 0; i < cart.items.length; i++){
                    this.itemsInCart += cart.items[i][1];
                }
                if(this.itemsInCart === 0){
                    this.itemsInCart = null;
                }
            }
        );
    }

    ngOnDestroy() {
		this.itemsSubscription.unsubscribe();
	}
}
