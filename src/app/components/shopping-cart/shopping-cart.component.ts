import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { ShoppingCart } from '~/app/models/shopping-cart.model';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '~/app/services/shopping-cart.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData, View, Page } from 'tns-core-modules/ui/page';

@Component({
    selector: 'ns-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    back: boolean = false;
    shoppingCart: ShoppingCart;
    shoppingCartSubscription: Subscription;
    emptyShoppingCart: boolean;
    title: string = "MON PANIER";

    constructor(private shoppingCartService: ShoppingCartService) { }


    ngOnInit(): void {
        this.emptyShoppingCart = true;
        this.shoppingCartSubscription = this.shoppingCartService.shoppingCartSubject.subscribe(
            (shoppingCart: ShoppingCart) => {
                this.shoppingCart = shoppingCart;
                if (this.shoppingCart.items.length > 0) {
                    this.emptyShoppingCart = false;
                }
                else {
                    this.emptyShoppingCart = true;
                }
            }
        );
    }

    onInitPicture(index: number, args: EventData) {
        let pictureView = <Image>args.object;
        let currentColor = this.shoppingCart.items[index][0].color;
        for (let i = 0; i < this.shoppingCart.items[index][0].pictures.length; i++) {
            let currentPicture = this.shoppingCart.items[index][0].pictures[i];
            if (currentPicture.includes(currentColor.replace(/\s/g, "").toLocaleLowerCase())) {
                let source = "~/item_pictures/" + currentPicture + ".jpg";
                pictureView.src = source;
                break;
            }
        }
    }

    onChooseColor(index: number, args: EventData) {
        dialogs.action({
            message: "Choisissez une couleur",
            cancelButtonText: "Annuler",
            actions: this.shoppingCart.items[index][0].colors
        }).then(result => {
            if (result !== "Annuler") {
                this.shoppingCart.items[index][0].color = result;
                for (let i = 0; i < this.shoppingCart.items[index][0].pictures.length; i++) {
                    let currentPicture = this.shoppingCart.items[index][0].pictures[i];
                    if (currentPicture.includes(result.replace(/\s/g, "").toLocaleLowerCase())) {
                        let tempString = "picture" + index;
                        let field = <View>args.object;
                        let page = <Page>field.page;
                        let pictureView = <Image>page.getViewById(tempString);
                        let source = "~/item_pictures/" + currentPicture + ".jpg";
                        pictureView.src = source;
                        break;
                    }
                }
            }
        });
    }

    onChooseNicotine(index: number) {
        dialogs.action({
            message: "Choisissez un taux de nicotine",
            cancelButtonText: "Annuler",
            actions: this.shoppingCart.items[index][0].nicotineRates
        }).then(result => {
            if (result !== "Annuler") {
                this.shoppingCart.items[index][0].nicotine = result;
            }
        });
    }

    onChooseBottleSize(index: number) {
        dialogs.action({
            message: "Choisissez la contenance",
            cancelButtonText: "Annuler",
            actions: this.shoppingCart.items[index][0].capacities
        }).then(result => {
            if (result !== "Annuler") {
                this.shoppingCart.items[index][0].capacity = result;
            }
        });
    }

    onQuantity(choice: string, index: number) {
        if (choice === "plus") {
            let quantity: number = this.shoppingCart.items[index][1] + 1;
            this.shoppingCartService.changeQuantity(index, quantity);
        }
        else if (choice === "minus") {
            if ((this.shoppingCart.items[index][1] - 1) > 0) {
                let quantity: number = this.shoppingCart.items[index][1] - 1;
                this.shoppingCartService.changeQuantity(index, quantity);
            }
        }
    }

    onDeleteItem(index: number) {
        dialogs.confirm({
            title: "Supprimer un article",
            message: "Êtes-vous sûre de vouloir supprimer " + this.shoppingCart.items[index][0].name + " ?",
            okButtonText: "Oui",
            cancelButtonText: "Non",
            neutralButtonText: "Annuler"
        }).then((result: boolean) => {
            if (result === true) {
                this.shoppingCartService.removeItemToCart(index);
            }
        });
    }

    goBack(): void {
    }

    onRotate(args) {
        let image = <Image>args.object;
        image.animate({
            rotate: 360,
            duration: 750
        }).then(() => image.rotate = 0);
    }

    ngOnDestroy(): void {
        this.shoppingCartSubscription.unsubscribe();
    }

}
