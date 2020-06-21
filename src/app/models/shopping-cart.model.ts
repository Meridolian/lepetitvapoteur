import { Item } from "./item.model";

export class ShoppingCart {

    items: [Item, number, number][];
    total_price: number;

    constructor(items: [Item, number, number][], total_price: number){
        this.items = items;
        this.total_price = total_price;
    }
}