import { ProductType, SubCategory } from "./categories";

export class Item {

    id: number;
    name: string;
    pictures: [string];
    price: number;
    description: string;
    product_type: ProductType;
    sub_category: SubCategory;
    brand_id: number;
}