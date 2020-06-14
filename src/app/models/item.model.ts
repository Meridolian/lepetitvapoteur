import { Categories } from "./categories";

export class Item {

    id: number;
    name: string;
    pictures: string[];
    price: number;
    description: string;
    shortDescription;
    categories: Categories[];
    brand_id: number;
}