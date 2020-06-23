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
            nicotine: "",
            bottleSizes: [],
            bottleSize: "",
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
            nicotine: "",
            bottleSizes: [],
            bottleSize: "",
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
            pictures: ["zeus_x_rta_black_1", "zeus_x_rta_black_2", "zeus_x_rta_blue_1", "zeus_x_rta_blue_2", "zeus_x_rta_gold_1", "zeus_x_rta_gold_2",
                "zeus_x_rta_green_1", "zeus_x_rta_green_2", "zeus_x_rta_gunmetal_1", "zeus_x_rta_gunmetal_2", "zeus_x_rta_rainbow_1", "zeus_x_rta_rainbow_2",
                "zeus_x_rta_red_1", "zeus_x_rta_red_2", "zeus_x_rta_stainlesssteel_1", "zeus_x_rta_stainlesssteel_2", "zeus_x_rta_winered_1",
                "zeus_x_rta_winered_2"],
            categories: [Categories.favoriteExpert, Categories.rebuildable, Categories.bestSale],
            brand_id: 2,
            colors: ["BLACK", "BLUE", "GOLD", "GREEN", "GUNMETAL", "RAINBOW", "RED", "STAINLESS STEEL", "WINE RED"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: [],
            bottleSize: "",
        },
        {
            id: 3,
            name: "CLEAROMISEUR ZEUS" + "\n" + "TANK GEEK VAPE",
            description: "Le Zeus Sub Ohm Tank est la version clearomiseur du célèbre atomiseur reconstructible de Geek Vape. Le Zeus Tank " +
                "vous propose les facilités d'un clearomiseur avec un remplissage par le haut et des résistances en mesh faciles à changer. La " +
                "contenance est importante : 5 ml. Les fuites sont quant à elles absentes grâce à son système d'aération par le haut du " +
                "clearomiseur." + "\n" + "\n" + "A l'écoute des vapoteurs, Geek Vape invente une résistance qui s'installe proprement, à la " +
                "main, ou à l'aide de la clé fournie qui diminue le contact du e liquide avec les doigts. Il est également possible de changer " +
                "la résistance en mesh du Zeus Tank sans avoir à vider le réservoir !" + "\n" + "\n" + "Le Zeus Sub Ohm Tank de Geek Vape est un " +
                "clearomiseur de 26 mm à la base, conçu pour vapoter en inhalation directe des e liquides composés de taux élevés de glycérine " +
                "végétale pour une production de vapeur optimale (Taux de VG supérieur à 70% conseillé)." + "\n" + "\n" +
                "Le clearomiseur Zeus Tank est fabriqué par Geek Vape.",
            shortDescription: "Une version complètement revue et corrigée du célèbre Zeus RTA pour vous offrir toujours plus de vapeur et " +
                "de saveurs.",
            price: 22.90,
            pictures: ["zeus_tank_black", "zeus_tank_blue", "zeus_tank_gold", "zeus_tank_gunmetal", "zeus_tank_rainbow", "zeus_tank_red",
                "zeus_tank_stainlesssteel"],
            categories: [Categories.clearomizerPod, Categories.bestSale],
            brand_id: 2,
            colors: ["BLACK", "BLUE", "GOLD", "GUNMETAL", "RAINBOW", "RED", "STAINLESS STEEL"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: [],
            bottleSize: "",
        },
        {
            id: 4,
            name: "GRAVITY OF LOVE" + "\n" + "MR BREWER 30 ML",
            description: "Concentré Gravity of love Mr Brewer. Un concentré ultra fruité et rafraichissant. Melon, fraise et pêche au " +
            "programme. Avec un zeste de citron et une légère sensation glacée en fin de vape. Gravity of love est une recette originale " +
            "idéale pour l’été." + "\n" + "\n" + "Maturation conseillée : 5 jours minimum, idéale à 15 jours" + "\n" + "\n" + 
            "Dosage conseillé avec une base 50/50 de PG/VG : 15%, 17% avec une base 30/70 et 20% en Full VG." + "\n" + "\n" + 
            "Le concentré Gravity of Love Mr Brewer est fabriqué par Juice & Joy.",
            shortDescription: "Concentré Gravity of love Mr Brewer. Un concentré ultra fruité et rafraichissant. Melon, fraise et pêche au " +
            "programme.",
            price: 13.90,
            pictures: ["gravity_of_love"],
            categories: [Categories.aroma, Categories.fruitAroma],
            brand_id: 3,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: ["30ml"],
            bottleSize: "",
        },
        {
            id: 5,
            name: "CONCENTRÉ OPUNTIA" + "\n" + "MR BREWER 30 ML",
            description: "Flacon PE de 30ml avec bouchon sécurité enfants." + "\n" + "\n" + "La douceur de la figue de barbarie mélangé " +
            "avec du melon et une corbeille de fruits des bois." + "\n" + "\n" + "Fabrication 100% Française." + "\n" + "\n" + "Bien agiter " +
            "votre concentré d'arôme et votre base avant d'effectuer un mélange." + "\n" + "\n" + "N'utilisez pas plus de 15% de concentré " +
            "d'arôme dans un mélange en 50 VG. Par exemple, pour un flacon de 10ml, n'utilisez au total pas plus de 1,5ml d'arôme." + "\n" +  
            "\n" + "Une fois le mélange effectué, bien agiter et laissez votre mélange reposer 8 à 10 jours en l'agitant de temps en temps." +
            "\n" + "\n" + "Chaque étiquette de la gamme Mr Brewer décrit le dosage et le steep de chaque arôme",
            shortDescription: "La douceur de la figue de barbarie mélangé avec du melon et une corbeille de fruits des bois.",
            price: 13.90,
            pictures: ["opuntia"],
            categories: [Categories.aroma, Categories.fruitAroma],
            brand_id: 3,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: ["30ml"],
            bottleSize: "",
        },
        {
            id: 6,
            name: "CONCENTRÉ ANANAS" + "\n" + "TROPICAL & CO EXO",
            description: "Concentré Ananas Tropical & Co Exo. Un concentré complexe qui associe un ananas avec des fruits tropicaux. Sans " + 
            "Koolada (frais) ni sucralose." + "\n" + "\n" + "Les concentrés EXO sont à mélanger avec une base de PG/VG, éventuellement avec " +
            "un ou plusieurs boosters de nicotine." + "\n" + "\n" + "Dosage conseillé à partir de 10% et 15% pour les plus gourmands !"
            + "\n" + "\n" + "Temps de maturation conseillé : 48H, idéal à partir de 15 jours." + "\n" + "\n" + "Le concentré Ananas Tropical " +
            "& Co Exo est fabriqué en France par Revolute.",
            shortDescription: "Concentré Ananas Tropical & Co Exo. Un concentré complexe qui associe un ananas avec des fruits tropicaux. " +
            "Sans Koolada (frais) ni sucralose.",
            price: 5.20,
            pictures: ["ananas_tropical_exo", "ananas_tropical_exo_bottle"],
            categories: [Categories.aroma, Categories.fruitAroma],
            brand_id: 4,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: ["10ml"],
            bottleSize: "",
        },
        {
            id: 7,
            name: "BOX AEGIS SOLO" + "\n" + "100W GEEK VAPE",
            description: "La box Aegis Solo 100W de Geek Vape conviendra aux vapoteurs en quête d'un mod électronique robuste, résistant aux " +
            "chocs et à la poussière tout en étant waterproof. Le mod Aegis Solo fonctionne avec un accu 18650 et est hyper réactif grâce à " +
            "son chipset AS-100. Il fournit également une puissance maximale de 100 watts !" + "\n" + "\n" + "En plus d'être waterproof " +
            "(classée IP67) et fabriqué avec des matériaux résistants, sa connexion de 27 mm de diamètre permet d'utiliser la grande majorité " +
            "des atomiseurs du marché (clearomiseurs, matériels reconstructibles). La box Aegis Solo est particulièrement polyvalente en " +
            "offrant plusieurs fonctions et modes de vape tout en restant techniquement accessible." + "\n" + "\n" + "En résumé, pour celles " +
            "et ceux qui cherchent un mod électronique qui ne craint ni l'eau, ni la poussière, ni les chocs pour pouvoir vaper leurs " +
            "liquides en toutes circonstances, la box Aegis Solo 100W pourrait bien être la solution." + "\n" + "\n" + "La box Aegis Solo " +
            "100W est fabriquée par Geek Vape.",
            shortDescription: "Une box à simple accu 18650, waterproof et résistante aux chocs et à la poussière, avec un large diamètre de " +
            "connexion.",
            price: 37.90,
            pictures: ["aegis_solo_black", "aegis_solo_black_2", "aegis_solo_blue", "aegis_solo_blue_2", "aegis_solo_gunmetal", 
            "aegis_solo_gunmetal_2", "aegis_solo_orange", "aegis_solo_orange_2", "aegis_solo_red", "aegis_solo_red_2"],
            categories: [Categories.boxMod],
            brand_id: 2,
            colors: ["BLACK", "BLUE", "GUNMETAL", "ORANGE", "RED"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            bottleSizes: ["10ml"],
            bottleSize: "",
        },
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
