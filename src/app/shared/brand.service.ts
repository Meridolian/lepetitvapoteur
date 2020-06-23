import { Injectable } from "@angular/core";
import { Brand } from "../models/brand.model";

@Injectable({
    providedIn: "root"
})
export class BrandService {

    private brands = new Array<Brand>(
        {
            id: 0,
            name: "Le Petit Vapoteur",
            description: "La Gamme Le Petit Vapoteur vous propose des liquides de première qualité. De fabrication française, " +
            "la gamme Le Petit Vapoteur n’utilise que le meilleur des produits pour votre vape quotidienne." +
            "Un choix des saveurs qui plaira au plus grand nombre de vapoteurs. Une proportion de propylène glycol et de glycérine " +
            "végétale de 60/40, adaptée à tous les types de matériels de vape (clearomiseurs, atomiseurs). La gamme Le Petit Vapoteur, " +
            "le choix du meilleur." + "&#xa;" + "Fabriqué en France",
            picture: "lpv_logo"
        },
        {
            id: 1,
            name: "Vampire Vape",
            description: "Fabriqué en Angleterre, un e liquide Vampire Vape bénéficie d'une qualité de vape dont la réputation " +
            "n'est plus à faire. Reconnu et très apprécié des vapoteurs, chaque e liquide Vampire Vape renferme des saveurs méchamment " +
            "délicieuses devenues des incontournables de la vape. Disponibles en plusieurs ratio de PG/VG et vendu en flacons de 10 ml " +
            "ou 50 ml, un e liquide Vampire Vape résulte toujours du génie de ses fabricants. Ne contenant que des arômes certifiés de " +
            "qualité alimentaire, un e liquide Vampire Vape est garanti sans diacétyle, ni parabène, ni ambrox.",
            picture: "vampire_vape_logo",
        },
        {
            id: 2,
            name: "GEEK VAPE",
            description: "Geekvape est une marque de cigarette electronique basée en Chine. L'entreprise Geek Vape s'est spécialisée dans " +
            "la fabrication de produits innovants destinés à un public de vapoteurs expérimentés. On doit par exemple à cette marque "+
            "l'atomiseur Geek Vape Zeus RTA et la box Aegis Mini qui sont d'ailleurs disponibles sur le site du Petit Vapoteur. " +
            "Nous proposons aussi dans notre catalogue des accessoires Geek Vape comme, par exemple, des fils résistifs pour atomiseur " +
            "reconstructible.",
            picture: "geek_vape",
        },
        {
            id: 3,
            name: "MR BREWER",
            description: "Les arômes concentrés de la gamme Mr Brewer sont fabriqués en Italie par Juice & Joy. Les concentrés Mr Brewer " +
            "pour votre cigarette électronique doivent être mélangés avec une base neutre de PG/VG (Propylène Glycol/Glycérine Végétale). " +
            "Les concentrés Mr Brewer sont conditionnés en flacon allongé de 30ml et composés  de propylène glycol et d’arômes alimentaires.",
            picture: "mr_brewer",
        },
        {
            id: 4,
            name: "EXO",
            description: "EXO est une gamme de concentrés pour la préparation des e liquides en DIY. Une gamme de recettes complexes " +
            "composées de deux saveurs dominantes et mêlées à un puissant mix de fruits tropicaux. Comme un air de Malaisie, sans Koolada " +
            "(additif frais), ni sucralose. Les concentrés Exo sont proposés en flacon de 10 ml avec bouchon de sécurité et embout " +
            "compte-goutte. Composés de propylène glycol et d'arômes artificiels et/ou naturels, les concentrés de la gamme de concentrés " +
            "EXO pour cigarette électronique sont à mélanger dans une base de PG/VG éventuellement avec un ou plusieurs boosters de nicotine. " +
            "Les concentrés EXO sont fabriqués en France par Revolute.",
            picture: "exo",
        }
    );

    getBrands(): Array<Brand> {
        return this.brands;
    }

    getBrand(id: number): Brand {
        for (let i = 0; i < this.brands.length; i++) {
            let currentBrand = this.brands[i];
            if (currentBrand.id === id) {
                return currentBrand;
            }
        }
    }
}
