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

    label: string;
    lastName: string;
    firstName: string;
    fullAddress: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    phoneNumber: string;
    default: boolean;

    // address complement
    society: string;
    staircase: string;
    doorCode1: string;
    building: string;
    doorCode2: string;
    intercom: string;
    secondPhoneNumber: string;
    instructions: string;

    constructor(label: string, lastName: string, firstName: string, fullAddress: string, postalCode: string, city: string, state: string,
        country: string, phoneNumber: string, dflt: boolean, society: string, staircase: string, doorCode1: string, building: string, 
        doorCode2: string, intercom: string, secondPhoneNumber: string, instructions: string) {

        this.label = label;
        this.lastName = lastName;
        this.firstName = firstName;
        this.fullAddress = fullAddress;
        this.postalCode = postalCode;
        this.city = city;
        this.state = state;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.default = dflt;

        this.society = society;
        this.staircase = staircase;
        this.doorCode1 = doorCode1;
        this.building = building;
        this.doorCode2 = doorCode2;
        this.intercom = intercom;
        this.secondPhoneNumber = secondPhoneNumber;
        this.instructions = instructions;
    }
}