import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { Categories } from "../models/categories";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    private items: Array<Item> = new Array<Item>(
        {
            id: 0,
            name: "RY4",
            description: "Le RY4 Le Petit Vapoteur est l’un des goûts les plus prisés des vapoteurs. Le célèbre RY4, est une base de " +
                "Classic avec des notes de vanille et de caramel. Un Classic très rond en bouche et très apprécié dans le monde entier."
                + "\n" + "\n" + "Le RY4 est conditionné en flacon de 10 ml PET avec compte-goutte et protection enfant." + "\n" +
                "&#xa;" + "Composé de 60% de Propylène Glycol et de 40% de Glycérine Végétale pour s’adapter au plus grand nombre de matériel."
                + "\n" + "\n" + "Dosage en nicotine au choix : 0 mg/ml, 3mg/ml, 6 mg/ml, 12 mg/ml, 16 mg/ml" + "\n" + "\n" +
                "Le RY4 Le Petit Vapoteur est fabriqué en France.",
            shortDescription: "Un goût Classic avec des notes de vanille et de caramel. " +
                "Une saveur ronde en bouche et généralement très appréciée.",
            price: 4.90,
            pictures: ["ry4"],
            categories: [Categories.juice, Categories.classicJuice, Categories.favoriteJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0mg", "3mg", "6mg", "12mg", "16mg"],
            nicotine: ""
        },
        {
            id: 1,
            name: "LE ROUGE",
            description: "Le Rouge Le Petit Vapoteur. Découvrez notre cocktail fruité, frais et complexe à base de fruits rouges " +
                "avec une légère pointe anisée." + "\n" + "\n" + "Le liquide Le Rouge Le Petit Vapoteur est conditionné en flacon " +
                "de 10 ml PET avec compte-goutte et protection enfant." + "\n" + "\n" + "Composé de 60% de Propylène Glycol et de 40% " +
                "de Glycérine Végétale pour s’adapter au plus grand nombre de matériel." + "\n" + "\n" + "Dosage en nicotine au choix : " +
                "0 mg/ml, 3 mg/ml, 6 mg/ml, 12 mg/ml, 16 mg/ml" + "\n" + "\n" + "Le liquide Rouge Le Petit Vapoteur est fabriqué en France.",
            shortDescription: "Découvrez notre cocktail fruité, frais, complexe à base de fruits rouges avec une légère pointe anisée.",
            price: 4.90,
            pictures: ["le_rouge"],
            categories: [Categories.juice, Categories.freshJuice, Categories.favoriteJuice, Categories.freshJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0mg", "3mg", "6mg", "12mg", "16mg"],
            nicotine: ""
        },
        {
            id: 2,
            name: "ZEUS X RTA GEEK VAPE",
            description: "Quand Geek Vape sort une troisième version de son fameux atomiseur Zeus, c'est forcément un événement ! " +
            "Nommée Zeus X RTA, cette V3 compile les éléments qui ont fait le succès de ses prédécesseurs tout en y ajoutant des nouveautés " +
            "bienvenues. Un véritable aboutissement pour ces reconstructibles aussi doués en saveurs qu'en vapeur." + "\n" + "\n" +
            "L'atomiseur Zeus X RTA propose un design plus imposant et tout en rondeur. Son diamètre est toujours de 25 mm à la base et son " +
            "arrivée d'air reste au niveau du top-cap pour vous assurer une vape sans fuite. Le Zeus X RTA peut contenir jusqu'à 4,5 ml de " +
            "e-liquide avec son réservoir \"bulb\". Il propose également un pyrex droit qui fera passer la contenance à 3,5 ml." + "\n" +
            "\n" + "Là où l'atomiseur Zeus X RTA innove, c'est au niveau de son plateau. Un postless pour du simple ou double coils qui " +
            "s'avère à l'utilisation plus confortable et qui facilite grandement les montages. Ce plateau est associé à un nouveau système " +
            "d'airflow, plus large mais aussi plus précis, pour encore plus de vapeur et de saveurs. Un sans-faute ?" + "\n" + "\n" +
            "L'atomiseur reconstructible Zeus X RTA est fabriqué par Geekvape.",
            shortDescription: "Une version complètement revue et corrigée du célèbre Zeus RTA pour vous offrir toujours plus de vapeur et " +
            "de saveurs.",
            price: 23.50,
            pictures: ["zeus_x_rta_black_1","zeus_x_rta_black_2","zeus_x_rta_blue_1","zeus_x_rta_blue_2","zeus_x_rta_gold_1","zeus_x_rta_gold_2",
            "zeus_x_rta_green_1","zeus_x_rta_green_2","zeus_x_rta_gunmetal_1","zeus_x_rta_gunmetal_2","zeus_x_rta_rainbow_1","zeus_x_rta_rainbow_2",
            "zeus_x_rta_red_1","zeus_x_rta_red_2","zeus_x_rta_stainlesssteel_1","zeus_x_rta_stainlesssteel_2","zeus_x_rta_winered_1",
            "zeus_x_rta_winered_2"],
            categories: [Categories.favoriteExpert, Categories.rebuildable],
            brand_id: 2,
            colors: ["BLACK", "BLUE", "GOLD", "GREEN", "GUNMETAL", "RAINBOW", "RED", "STAINLESS STEEL", "WINE RED"],
            color: "",
            nicotineRates: ["0mg", "3mg", "6mg", "12mg", "16mg"],
            nicotine: ""
        }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.id === id) {
                return currentItem;
            }
        }
    }

    getItemByCategory(category: Categories): Array<Item> {
        let itemsArray: Array<Item> = [];
        for (let i = 0; i < this.items.length; i++) {
            let currenItem = this.items[i];
            for (let j = 0; j < currenItem.categories.length; j++) {
                let currentCategory = currenItem.categories[j];
                if (currentCategory === category) {
                    itemsArray.push(currenItem);
                }
            }
        }
        return itemsArray;
    }

    getItemByName(name: string): Array<Item> {
        let itemsArray: Array<Item> = [];
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.name.includes(name.toUpperCase())) {
                itemsArray.push(currentItem);
            }
        }
        return itemsArray;
    }

    getItemByBrand(id: number): Array<Item> {
        let itemsArray: Array<Item> = [];
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.brand_id === id) {
                itemsArray.push(currentItem);
            }
        }
        return itemsArray;
    }
}
