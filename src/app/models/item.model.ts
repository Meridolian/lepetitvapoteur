import { Categories } from "./categories";

export class Item {

    id: number;
    name: string;
    pictures: string[];
    price: string;
    description: string;
    shortDescription: string;
    categories: Categories[];
    brand_id: number;
    colors: string[];
    nicotine: number;
}