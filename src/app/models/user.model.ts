import { ShoppingCart } from "./shopping-cart.model";
import { Item } from "./item.model";

export class User {

    civility: string;
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

    constructor(civility: string, firstName: string, lastName: string, email: string, password: string, birthday: Date, addresses: Array<Address>,
        phoneNumber: string, orders: Array<ShoppingCart>, frequentPurchases: Array<Item>, loyaltyPoints: number, wishList: Array<Item>) {
        this.civility = civility;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.addresses = addresses;
        this.phoneNumber = phoneNumber;
        this.orders = orders;
        this.frequentPurchases = frequentPurchases;
        this.loyaltyPoints = loyaltyPoints;
        this.wishList = wishList;
    }
}

export class Address {

    streetNumber: number;
    fullAddress: string;
    addressComplement: string;
    postalCode: number;
    city: string;
    country: string;

    constructor(streetNumber: number, fullAddress: string, addressComplement: string, postalCode: number, city: string, country: string) {
        this.streetNumber = streetNumber;
        this.fullAddress = fullAddress;
        this.addressComplement = addressComplement;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
    }
}