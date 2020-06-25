import { Categories } from "./categories";

export class Item {

    id: number;
    name: string;
    pictures: Array<string>;
    price: number;
    description: string;
    shortDescription: string;
    categories: Array<Categories>;
    brand_id: number;
    colors: Array<string>;
    color: string;
    nicotineRates: string[];
    nicotine: string;
    capacities: string[];
    capacity: string;
    ohmValues: string[];
    ohmValue: string;
}