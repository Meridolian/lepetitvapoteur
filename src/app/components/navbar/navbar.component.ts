import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";
import { ShoppingCartService } from '~/app/services/shopping-cart.service';
import { ShoppingCart } from '~/app/models/shopping-cart.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ns-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    itemsInCart: number;
    itemsSubscription: Subscription;

    constructor(private shoppingCartService: ShoppingCartService,
        private router: RouterExtensions,
        private activeRoute: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.router.navigate([{
            outlets: {
                home: ["home"], search: ["search"], categories: ["categories"], account: ["account"], shoppingCart: ["shoppingCart"]
            }
        }], { relativeTo: this.activeRoute });

        this.itemsSubscription = this.shoppingCartService.shoppingCartSubject.subscribe(
            (cart: ShoppingCart) => {
                this.itemsInCart = 0;
                for (let i = 0; i < cart.items.length; i++) {
                    this.itemsInCart += cart.items[i][1];
                }
                if (this.itemsInCart === 0) {
                    this.itemsInCart = null;
                }
            }
        );
    }

    ngOnDestroy() {
        this.itemsSubscription.unsubscribe();
    }

}
