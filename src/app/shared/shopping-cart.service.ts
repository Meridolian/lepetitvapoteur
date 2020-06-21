import { Injectable } from "@angular/core";
import { ShoppingCart } from "../models/shopping-cart.model";
import { Item } from "../models/item.model";

@Injectable({
    providedIn: "root"
})
export class ShoppingCartService {

    shoppingCart: ShoppingCart = new ShoppingCart([], 0);

    addToCart(item: Item, quantity: number){
        let itemAlreadyInCart = false;
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            if(item === currentItem[0]){
                this.shoppingCart.items[i][1] += quantity;
                itemAlreadyInCart = true;
                break;
            }
        }
        if(!itemAlreadyInCart){
            this.shoppingCart.items.push([item, quantity]);
        }
        this.totalPrice();
    }

    changeQuantity(item: Item, quantity: number){
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            if(item === currentItem[0]){
                this.shoppingCart.items[i][1] = quantity;
            }
        }
        this.totalPrice();
    }

    removeItemToCart(item: Item){
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            if(item === currentItem[0]){
                this.shoppingCart.items.splice(i);
                break;
            }
        }
        this.totalPrice();
    }

    totalPrice(){
        this.shoppingCart.total_price = 0;
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            this.shoppingCart.total_price += currentItem[0].price * currentItem[1];
        }
    }
}