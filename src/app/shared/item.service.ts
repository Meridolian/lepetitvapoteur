import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { Categories } from "../models/categories";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    private items = new Array<Item>(
        {
            id: 0,
            name: "RY4",
            description: "Le RY4 Le Petit Vapoteur est l’un des goûts les plus prisés des vapoteurs. Le célèbre RY4, est une base de " +
            "Classic avec des notes de vanille et de caramel. Un Classic très rond en bouche et très apprécié dans le monde entier."
            + "&#xa;" + "&#xa;" + "Le RY4 est conditionné en flacon de 10 ml PET avec compte-goutte et protection enfant." + "&#xa;" + 
            "&#xa;" + "Composé de 60% de Propylène Glycol et de 40% de Glycérine Végétale pour s’adapter au plus grand nombre de matériel."
            + "&#xa;" + "&#xa;" + "Dosage en nicotine au choix : 0 mg/ml, 3mg/ml, 6 mg/ml, 12 mg/ml, 16 mg/ml" + "&#xa;" + "&#xa;" + 
            "Le RY4 Le Petit Vapoteur est fabriqué en France.",
            price: 4.90,
            pictures: ["ry4"],
            categories: [Categories.juice, Categories.classicJuice, Categories.favoriteJuice],
            brand_id: 0
        },
        {
            id: 1,
            name: "LE ROUGE",
            description: "Le Rouge Le Petit Vapoteur. Découvrez notre cocktail fruité, frais et complexe à base de fruits rouges " +
            "avec une légère pointe anisée." + "&#xa;" + "&#xa;" + "Le liquide Le Rouge Le Petit Vapoteur est conditionné en flacon " +
            "de 10 ml PET avec compte-goutte et protection enfant." + "&#xa;" + "&#xa;" + "Composé de 60% de Propylène Glycol et de 40% " +
            "de Glycérine Végétale pour s’adapter au plus grand nombre de matériel." + "&#xa;" + "&#xa;" + "Dosage en nicotine au choix : " +
            "0 mg/ml, 3 mg/ml, 6 mg/ml, 12 mg/ml, 16 mg/ml" + "&#xa;" + "&#xa;" + "Le liquide Rouge Le Petit Vapoteur est fabriqué en France.",
            price: 4.90,
            pictures: ["le_rouge"],
            categories: [Categories.juice, Categories.freshJuice, Categories.favoriteJuice, Categories.freshJuice],
            brand_id: 0
        }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        for(let i = 0; i < this.items.length; i++){
            let currentItem = this.items[i];
            if(currentItem.id === id){
                return currentItem;
            }
        }
    }

    getItemByCategory(category: Categories): Array<Item>{
        let itemsArray: Array<Item> = [];
        for(let i = 0; i < this.items.length; i++){
            let currenItem = this.items[i];
            for(let j = 0; j < currenItem.categories.length; j++){
                let currentCategory = currenItem.categories[j];
                if(currentCategory === category){
                    itemsArray.push(currenItem);
                }
            }
        }
        return itemsArray;
    }
    
    getItemByBrand(id: number): Array<Item> {
        let itemsArray: Array<Item> = [];
        for(let i = 0; i < this.items.length; i++){
            let currentItem = this.items[i];
            if(currentItem.brand_id === id){
                itemsArray.push(currentItem);
            }
        }
        return itemsArray;
    }
}
