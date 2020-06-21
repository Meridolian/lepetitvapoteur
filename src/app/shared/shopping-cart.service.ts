import { Injectable } from "@angular/core";
import { ShoppingCart } from "../models/shopping-cart.model";
import { Item } from "../models/item.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ShoppingCartService {

    shoppingCart: ShoppingCart;
    shoppingCartSubject: Subject<ShoppingCart>;

    constructor(){
        this.initShoppingCart();
    }

    initShoppingCart(){
        this.shoppingCart = new ShoppingCart([], 0);
        this.shoppingCartSubject = new Subject<ShoppingCart>();
        this.emitShoppingCart();
    }

    emitShoppingCart(){
        this.shoppingCartSubject.next(this.shoppingCart);
    }

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
            this.shoppingCart.items.push([item, quantity, 0]);
        }
        this.totalItemPrice();
    }

    changeQuantity(index: number, quantity: number){
        this.shoppingCart.items[index][1] = quantity;
        this.totalItemPrice();
    }

    removeItemToCart(index: number){
        this.shoppingCart.items.splice(index, 1);
        this.totalItemPrice();
    }

    totalItemPrice(){
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            let total = currentItem[0].price * currentItem[1];
            this.shoppingCart.items[i][2] = total;
        }
        this.totalPrice();
    }

    totalPrice(){
        this.shoppingCart.total_price = 0;
        for(let i = 0; i < this.shoppingCart.items.length; i++){
            let currentItem = this.shoppingCart.items[i];
            this.shoppingCart.total_price += currentItem[2];
        }
        this.emitShoppingCart();
    }
}