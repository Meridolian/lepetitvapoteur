import { Item } from "./item.model";

export class ShoppingCart {

    id: number;
    items: [Item];
    total_price: number;
}