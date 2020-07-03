import { ShoppingCart } from "./shopping-cart.model";
import { Item } from "./item.model";

export class User {

    civility: Civility;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: Date;
    addresses: Array<Address>;
    phoneNumber: string;
    orders: Array<ShoppingCart>;
    frequentPurchases: Array<Item>;
    loyaltyPoints: number;
    wishList: Array<Item>;

    // alerts: ?;
}

export class Address {
    streetNumber: number;
    fullAddress: string;
    addressComplement: string;
    postalCode: number;
    city: string;
    country: string;
}

export enum Civility {
    Mr = "Monsieur",
    Mme = "Madame",
    other = "Je ne souhaite pas répondre",
}