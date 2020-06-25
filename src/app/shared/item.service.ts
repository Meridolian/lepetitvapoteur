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
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: ["30ml"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: ["30ml"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: ["10ml"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 8,
            name: "PACK READY TO MIX 50/50",
            description: "Le Pack Ready to Mix 50/50 vous permettra de produire votre propre e liquide DIY facilement, rapidement et sans calcul."+
            "La quantité de base e liquide Born To Diy en 50/50 de PG/VG est pré-remplie. Vous n'aurez, par la suite, qu'à ajouter le nombre de " +
            "boosters fournis" + "\n" + "\n" + "La composition du Pack Ready To Mix 50/50 diffère selon le taux de nicotine souhaité." + "\n" + "\n" +
            "   • Pour un pack en 0 mg/ml : 200 ml de base e liquide ;" + "\n" + "  • Pour un pack en 3 mg/ml : 170 ml de base e liquide + 3 boosters de"+ 
            "nicotine de 10 ml (soit 30 ml) ;" + "\n" + "   • Pour un pack en 6 mg/ml : 140 ml de base e liquide + 6 boosters de nicotine de 10 ml (soit 60 ml) ;" +"\n" +
            "   • Pour un pack en 9 mg/ml : 110 ml de base e liquide + 9 boosters de nicotine de 10 ml (soit 90 ml) ;" +"\n" +
            "   • Pour un pack en 12 mg/ml : 80 ml de base e liquide + 12 boosters de nicotine de 10 ml (soit 120 ml)." + "\n" + "\n" + "Une fois la base " +
            "et les boosters mélangés, vous pourrez y ajouter les arômes et concentrés que vous aurez choisi. A noter que le flacon dispose" + 
            "d'une capacité maximum de 250ml de e liquide DIY."+ "\n" + " La base e liquide Born To Diy 50/50 de PG/VG et les boosters de nicotine Born To Diy sont" +
            "imaginés et fabriqués par Le Petit Vapoteur.",
            shortDescription: "Concevez facilement votre e liquide DIY 50/50 avec la base et les boosters du pack Ready To mix!",
            price: 7.50,
            pictures: ["pack_ready_to_mix5050", "pack_ready_to_mix5050_2", "pack_ready_to_mix5050_3", "pack_ready_to_mix5050_4", "pack_ready_to_mix5050_5"],
            categories: [Categories.base, Categories.goodPlanDiy, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["O MG", "3 MG", "6 MG", "9 MG", "12 MG"],
            nicotine: "",
            capacities: ["200 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 9,
            name: "MOD TITAN PRO-MS LPV",
            description: "Ce mod Titan Pro-MS LPV est une collaboration entre le célèbre moddeur français Wheels and Time et Le Petit Vapoteur." +
            "Ce mod est un 100% méca, fabriqué en titane et laiton. Léger et extrèmement robuste, il est fait pour défier le temps !" + "\n" + "\n" + 
            "Son diamètre est de 24 mm et sa longueur de 93 mm. Il est compatible avec les accus 18650. Le mod Titan Pro-MS LPV est également" +
            "sécurisé par un switch verrouillable à répulsion magnétique. " + "\n" + "\n" + "Le mod Titan Pro-MS LPV est une édition limitée," +
            "numérotée et estampillée Le Petit Vapoteur." + "\n" + "\n" + "En résumé, pour celles " +
            "Le mod Titan Pro-MS LPV est fabriqué en France par Sebastien Lavergne de Wheels and Time en collaboration avec Le Petit Vapoteur." + "\n" + "\n" + 
            "Un jeu de cartes Wheels and Time est offert pour l'achat d'un mod Titan Pro-MS LPV.",
            shortDescription: "Un mod méca made in France, édition limitée en collaboration avec Le Petit Vapoteur. En titane et switch verrouillable.",
            price: 179.00,
            pictures: ["mod_titan_pro_ms_lpv", "mod_titan_pro_ms_lpv_2", "mod_titan_pro_ms_lpv_3", "mod_titan_pro_ms_lpv_4"],
            categories: [Categories.mechMod, Categories.highEndExpert],
            brand_id: 0,
            colors: ["TITANE"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 10,
            name: "WATERMELON FRESH AND" + "\n" + "SWEET 50 ML",
            description: "E liquide Watermelon Fresh and Sweet 50 ml. Envie de vous désaltérer ? Le e liquide Watermelon est un subtil mélange" +
            "entre un melon sucré et une pastèque juteuse... Rafraîchissement garanti." + "\n" + "\n" + "Fresh and Sweet est une gamme de e liquides" +
            "fruités, frais et sucrés, disponibles en flacon de 50 ml pouvant contenir 70 ml après l'ajout de boosters de nicotine si besoin." + "\n" + "\n" + 
            "Le e liquide Watermelon 50 ml de la gamme Fresh and Sweet est fabriqué en France par Aromea.", 
            shortDescription: "Le e liquide Watermelon est un subtil mélange entre un melon sucré et une pastèque juteuse... Rafraichissement garanti",
            price: 37.90,
            pictures: ["watermelon_fresh_and_sweet"],
            categories: [Categories.freshJuice,  Categories.juice, Categories.mixNVapeJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0 MG"],
            nicotine: "",
            capacities: ["50 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 11,
            name: "GREEN'S CUSTARD" + "\n" + "GREEN VAPES",
            description: "E liquide Green's Custard Green Vapes. Une recette revue de toute pièce par la marque qui saura satisfaire les papilles" +
            "les plus gourmandes. La Green's Custard est une crème vanille très gourmande, au léger goût caramélisé." + "\n" + "\n" +
            "Une recette revue de toute pièce par la marque qui saura satisfaire les papilles les plus gourmandes." + "\n" + "\n" + 
            "E liquide composé de 60 % de propylène glycol, 40 % de glycérine végétale, arômes destinés à l'inhalation. Plusieurs taux de nicotine" +
            "disponibles : 0 mg/ml, 3 mg/ml, 6 mg/ml, 11 mg/ml et  16 mg/ml." + "\n" + "\n" + "E liquide fabriqué en France par Green Liquides.", 
            shortDescription: "Une crême vanille très gourmande, au léger goût caramélisé. Un incontournable signé Green Vapes",
            price: 16.90,
            pictures: ["greens_custard_green_vapes", "greens_custard_green_vapes_2"],
            categories: [Categories.greedyJuice,  Categories.juice, Categories.topTenJuice, Categories.topGreedyJuice, Categories.topFrenchJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0 MG", "3 MG", "6 MG", "11 MG", "16 MG"],
            nicotine: "",
            capacities: ["3X10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 12,
            name: "CASTLE LONG",
            description: "Le Castle Long est un mélange de noix de coco, d'amandes grillées saupoudrées d'un savoureux sucre brun, avec 2 types" +
            "de vanille. Un bourbon du Kentucky et un arôme boisé incomparable !" + "\n" + "\n" +"Proposé en 50PG/50VG dans un flacon PET avec verseur," +
            "livré dans un coffret.", 
            shortDescription: "Un bourbon du kentucky rehaussé par un mélange de noix de coco, d'amende grillées et de vanille. Magnifique !",
            price: 6.90,
            pictures: ["CASTLE_LONG"],
            categories: [Categories.drinkJuice, Categories.greedyJuice,  Categories.juice, Categories.topGreedyJuice, Categories.topUsJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["3 MG", "6 MG", "12 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 13,
            name: "PULP LE THE" + "\n" + "A LA MENTHE" ,
            description: "Eliquide PULP Thé à la menthe" + "\n" + "\n" + "Savourez ce thé “nahnah” comme à la Medina, préparé avec la menthe fraichement" +
            "cueillie du jardin." + "\n" + "\n" + "Flacon  de 10 ml. ", 
            shortDescription: "Savourez ce thé comme a la Medina, préparé avec la menthe fraîchement ceuillie du jardin",
            price: 5.90,
            pictures: ["pulp_le_the_a_la_menthe"],
            categories: [Categories.mentholJuice,  Categories.drinkJuice,  Categories.juice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0 MG", "3 MG", "6 MG", "12 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 14,
            name: "POD NORD 2" + "\n" + "SMOK" ,
            description: "Le Pod Nord 2 de Smok est un pod sophistiqué qui varie les sensations grâce à une puissance ajustable," +
            "jusqu'à 40 watts, et un choix intéressant de résistances. Le pod Nord 2 est équipé d'une bonne batterie de 1500 mAh" +
            "et d'un écran de 0.69''. Le pod Nord 2 a la discrétion d'un pod et l'efficacité d'un mod électronique pour vapoter " + 
            "avec un tirage serré ou plus ouvert." + "\n" + "\n" + "Le pod Nord 2 Smok est livré avec deux cartouches de 4,5 ml de" +
            "contenance, avec leur résistance, aussi différentes que complémentaires : 1 cartouche avec une résistance RPM Mesh de 0.40Ω" +
            "pour une vape aérienne en inhalation directe. 1 cartouche avec une résistance Nord DC 0.80Ω pour des tirages plus serrés et une vape" +
            "en inhalation indirecte." + "\n" + "\n" + "Polyvalent et compact, le pod Nord 2 possède une excellente autonomie pour vapoter plus longtemps," +
            "avec tout le confort et la sécurité nécessaire. Le pod Nord 2 est aussi compatible avec toutes les résistances RPM Coils et Nord Coils de Smok."+ "\n" + "\n" + 
            "Le pod Nord 2 est fabriqué par Smok." + "\n" + "\n" + "L'usage de e liquides au CBD n'est pas conseillé avec le kit Nord Pod.", 
            shortDescription: "Un pod sophistiqué et compact avec puissance variable jusqu'à 40W et plusieurs types de vape",
            price: 29.50,
            pictures: ["pod_nord_2_7_COLOR_COBRA", "pod_nord_2_7_COLOR_OIL", "pod_nord_2_7_COLOR_RESIN", "pod_nord_2_BLACK_COBRA", "pod_nord_2_GOLD", "pod_nord_2_RED", "pod_nord_2_WHITE COBRA"],
            categories: [Categories.pod, Categories.eCigarette, Categories.allKits, Categories.easyPack, Categories.advancedPack],
            brand_id: 0,
            colors: ["7 COLOR COBRA", "7 COLOR OIL", "7 COLOR RESIN", "BLACK COBRA", "GOLD", "RED", "WHITE COBRA"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 15,
            name: "BOOSTER BORN TO" + "\n" + "DIY 10ML 50/50" ,
            description: "Avec le Booster de nicotine Born To DIY, vous avez 10ml de base dosée à 20 mg/ml de nicotine pour faire vos mélanges DIY." +
            "Le Booster nicotine Born to DIY 10 ml est destiné à être dilué dans une base sans nicotine. Le Booster Born To DIY correspond aux normes en" + 
            "vigueur, de qualité pharmaceutique, dans une composition de 50% de propylène glycol (PG) et 50% de glycérine végétale (VG) pour un bon équilibre" +
            "entre vapeur et saveur." + "\n" + "\n" + "Avec le booster nicotine Born to DIY boostez vos DIY !" + "\n" + "\n" + "Fabriqué en France par Le Petit Vapoteur.", 
            shortDescription: "Avec le Booster de nicotine Born to DIY, vous avez 10ml de base dosé à 20mg/ml de...",
            price: 1.10,
            pictures: ["booster_nicotine_born_to_diy_10ml"],
            categories: [Categories.booster],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["20 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 16,
            name: "CONCENTRE VANILLE" + "\n" + "MAC DIYER" ,
            description: "Concentré vanille Mac Diyer. Mac Diyer vous réserve une saveur de vanille dont la subtilité vous procurera un grand plaisir !" + "\n" + "\n" + 
            "Concentré Mac Diyer disponible en flacon de 10 ml. Dosage conseillé : 10% de concentré avec une base 50/50 de PG/VG. " + "\n" + "\n" +
            "Le concentré vanille Mac Diyer est fabriqué en France par Le Petit Vapoteur. ", 
            shortDescription: "Apportez une touche de vanille à votre préparation DIY, c'est Mac Diyer qui l'a confectionnée rien que pour voue !",
            price: 1.50,
            pictures: ["concentre_vanille_mac_diyer"],
            categories: [Categories.greedyAroma, Categories.aroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 17,
            name: "ARÔME RHUM DE LA" + "\n" + "JAMAIQUE INAWERA" ,
            description: "Arôme concentré  Rhum de la Jamaique Inawera pour la fabrication de vos e-liquides." + "\n" + "\n" + 
            "Mélange de saveurs fortes et douces de rhum qui produit un excellent goût sucré. Idéal avec du Coca." + "\n" + "\n" +
            "Vendu en flacon de 10 ml avec système de goutte à goutte." + "\n" + "\n" + "Attention: Cet arôme doit être dilué dans une base.", 
            shortDescription: "arôme concentré Rhum de la Jamaique Inawera pour la fabrication de vos e-liquides...",
            price: 3.40,
            pictures: ["arome_rhum_de_la_jamaique", "arome_rhum_de_la_jamaique_2"],
            categories: [Categories.drinkAroma, Categories.aroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 18,
            name: "ARÔME BLACK ICE" + "\n" + "VAMPIRE VAPE" ,
            description: "Arôme concentré Black Ice par Vampire Vape, un mélange d'anis et de menthe polaire pour les amateurs de fraicheur et de hit." + "\n" + "\n" + 
            "Flacon de 30 ml.", 
            shortDescription: "Arôme concentré Black Ice par Vampire vape, un mélange d'anis et de menthe polaire pour les ...",
            price: 12.90,
            pictures: ["arome_black_ice_vampire_vape"],
            categories: [Categories.mentholAroma, Categories.aroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["30 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 19,
            name: "BOX MINIKIN KODAMA" + "\n" + "21700 ASMODUS" ,
            description: "La box Minikin Kodama 21700 est certainement le mod le plus sophistiqué du fabricant Asmodus. Fabriquée en acier inoxydable" +
            "et bois stabilisé avec résine, le mod Minikin Kodama 21700 allie ergonomie et performances. La Minikin Kodama ('esprit de l'arbre' en japonais)" +
            "fonctionne avec deux accus 21700 est conserve une prise en main confortable." + "\n" + "\n" + "Le mod Minikin Kodama 21700 possède un chipset GX-180TC-2," +
            "le dernier chipset Asmodus, qui gère un écran couleur HD de 0.96'', une puissance de 180 watts en mode VW et Curve (120 watts en contrôle de température). " +
            "Le mod a de nombreuses fonctions notamment avec le contrôle de température pour de nombreux fils résistifs. La plage de résistance est de 0.1Ω à 3.0Ω." + "\n" + "\n" + 
            "Ce mod magnifique s'adaptera à tous les atomiseurs de 25 mm de diamètre maximum."+ "\n" + "\n" + "La box Minikin Kodama 21700 est fabriquée par" +
            "Asmodus." + "\n" + "\n" + "Accus non fournis. " + "\n" + "\n" + "Les couleurs et motifs de la box varient à chaque modèle," +
            "photos non contractuelles.", 
            shortDescription: "Un mod à double accus 21700 en acier, bois stanilisé et résine. Nouveau chipset et 180 watts de puissance",
            price: 279.00,
            pictures: ["box_minikin_kodama_21700_PURLE", "box_minikin_kodama_21700_PURPLE_2", "box_minikin_kodama_21700_PURPLE_3", "box_minikin_kodama_21700_PURPLE_4", "box_minikin_kodama_21700_BLUE",
             "box_minikin_kodama_21700_BLUE_2", "box_minikin_kodama_21700_BLUE_3", "box_minikin_kodama_21700_BLUE_4"],
            categories: [Categories.boxMod, Categories.highEndExpert],
            brand_id: 0,
            colors: ["BLUE", "PURPLE"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 20,
            name: "PACK READY TO MIX 30/70",
            description: "Le Pack Ready To Mix 30/70 vous permettra de produire votre propre e liquide DIY facilement, rapidement et sans calcul." +
            "La quantité de base e liquide Born To Diy en 30/70 de PG/VG est pré-remplie. Vous n'aurez, par la suite, qu'à ajouter le nombre de" +
            "boosters fournis." + "\n" + "\n" + "La composition du Pack Ready To Mix 30/70 diffère selon le taux de nicotine souhaité." + "\n" + "\n" +
            "   • Pour un pack en 0 mg/ml : 200 ml de base e liquide ;" + "\n" + "  • Pour un pack en 3 mg/ml : 170 ml de base e liquide + 3 boosters de"+ 
            "nicotine de 10 ml (soit 30 ml) ;" + "\n" + "   • Pour un pack en 6 mg/ml : 140 ml de base e liquide + 6 boosters de nicotine de 10 ml (soit 60 ml) ;" +"\n" +
            "   • Pour un pack en 9 mg/ml : 110 ml de base e liquide + 9 boosters de nicotine de 10 ml (soit 90 ml) ;" +"\n" +
            "   • Pour un pack en 12 mg/ml : 80 ml de base e liquide + 12 boosters de nicotine de 10 ml (soit 120 ml)." + "\n" + "\n" + "Une fois la base " +
            "et les boosters mélangés, vous pourrez y ajouter les arômes et concentrés que vous aurez choisi. A noter que le flacon dispose" + 
            "d'une capacité maximum de 250ml de e liquide DIY."+ "\n" + " La base e liquide Born To Diy 30/70 de PG/VG et les boosters de nicotine Born To Diy sont" +
            "imaginés et fabriqués par Le Petit Vapoteur.",
            shortDescription: "Une façon simple et rapide de faire son propre e liquide DIY avec une base de PG/VG de 30/70",
            price: 7.50,
            pictures: ["pack_ready_to_mix_3070", "pack_ready_to_mix_3070_2", "pack_ready_to_mix_3070_3", "pack_ready_to_mix_3070_4", "pack_ready_to_mix_3070_5"],
            categories: [Categories.base, Categories.goodPlanDiy, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["O MG", "3 MG", "6 MG", "9 MG", "12 MG"],
            nicotine: "",
            capacities: ["200 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
            id: 21,
            name: "KIT IJUST" + "\n" + "ZEUS X" ,
            description: "Le kit iJust Zeus X est une superbe cigarette électronique qui plaira aux vapoteurs amateurs de mod tubulaire et de matériel reconstructible." +
            "Le kit iJust Zeus X est l'association du mod électronique iJust 21700 de Eleaf et de l'atomiseur reconstructible Zeus X RTA de Geek Vape. " + "\n" + "\n" + 
            "Le mod iJust 21700 est compatible avec les accus de type 21700. Entièrement sécurisé, le mod est parfaitement adapté à l'atomiseur Zeus X RTA et ses" +
            "possibilités de montages en simple et double résistances. Pas de réglages complexes, le mod reconnaîtra automatiquement la résistance installée sur le" +
            "Zeus X tant que sa valeur est comprise entre 0.10 et 3.0 ohms." + "\n" + "\n" + "Le mod iJust 21700 a une puissance maximale de 80 watts, de quoi profiter" + 
            "largement des qualités du Zeus X RTA en vapeur et en saveur. L'atomiseur est également livré avec 2 coils en Ni80 de 0.40 ohm pour pouvoir vapoter dés la" +
            "réception du kit."+ "\n" + "\n" + "Le mod iJust 21700 est fabriqué par Eleaf et le Zeus X RTA est fabriqué par Geek Vape." + "\n" + "\n" + "Accus non fournis.", 
            shortDescription: "Un mod tubulaire puissant et compatible 21700 associé a l'atomiseur vedette de Geek Vape",
            price: 41.90,
            pictures: ["kit_ijust_zeus_x_BLACKBLACK", "kit_ijust_zeus_x_RAIDOWDAZZLING", "kit_ijust_zeus_x_REDBLACKRED", "kit_ijust_zeus_x_SSSILVER"],
            categories: [Categories.tubeEcig, Categories.allKits, Categories.expertPack, Categories.expertKit, Categories.goodPlanExpert],
            brand_id: 0,
            colors: ["BLACK/BLACK", "RAINDOW DAZZLING", "RED/BLACK/RED", "STAINLESS STEAL/SILVER"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 22,
            name: "KIT AEGIS SOLO" + "\n" + "MELO 5 " ,
            description: "Ce kit Aegis Solo Melo 5 vous propose une robuste cigarette électronique pour vapoter sur tous les terrains. La box Aegis Solo est en" +
            "effet un mod électronique résistant aux chocs, à la poussière et à l'eau. Le clearomiseur Melo 5 est quant à lui équipé d'une spirale siliconée qui" +
            "protège son réservoir. De quoi affronter les pires conditions !" + "\n" + "\n" + "Le kit aegis Solo Melo 5, c'est aussi une association pleine " + 
            "d'autonomie et de polyvalence. Le clearomiseur Melo 5 a une contenance de 4 ml et il est compatible avec toutes les résistances EC Head de la gamme Melo." +
            "Il offre une vape en inhalation directe ou indirecte, au choix. L'Aegis Solo a de son côté de bonnes performances tout en restant simple à utiliser." +
            "Il fonctionne avec un accu 18650." + "\n" + "\n" + "La box Aegis Solo est fabriquée par Geek Vape et le clearomiseur Melo 5 par Eleaf."+ "\n" + "\n" + 
            "Accus non fournis.", 
            shortDescription: "Un kit performant et robuste associant la box Aegis Solo et le clearomiseur Melo 5",
            price: 59.90,
            pictures: ["kit_aegissolo_melo5_BLACKBLACK", "kit_aegissolo_melo5_BLACKSILVER", "kit_aegissolo_melo5_BLUEBLACK", "kit_aegissolo_melo5_BLUESILVER", 
            "kit_aegissolo_melo5_GUNMETALBLACK", "kit_aegissolo_melo5_GUNMETALSILVER", "kit_aegissolo_melo5_REDBLACK", "kit_aegissolo_melo5_REDSILVER"],
            categories: [Categories.advancedPack, Categories.allKits, Categories.boxEcig],
            brand_id: 0,
            colors: ["BLACK/BLACK", "BLACK/SILVER", "BLUE/BLACK", "BLUE/SILVER", "GUNMETAL/BLACK", "GUNMETAL/SILVER","RED/BLACK", "RED/SILVEDR"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 23,
            name: "KIT SWAG 2" + "\n" + "VAPORESSO" ,
            description: "Avec le kit Swag 2, Vaporesso propose une cigarette électronique élégante, simple et performante. Fonctionnant avec un accu 18650, la " +
            "petite box Swag 2 est relativement confortable et robuste grâce aux multiples revêtements qui l'entourent. La box du kit Swag 2 est également" +
            "ergonomique, agréable en main et le changement d'accu s'effectue par le haut du mod. Sa puissance maximale est de 80 watts." + "\n" + "\n" + "Le kit" +
            "Swag 2 propose également un clearomiseur NRG PE de 25 mm de diamètre, taillé pour la vapeur. Livré avec 2 résistances GT Coil, dont un mesh, sa" +
            "contenance est de 3,5 ml. Le clearomiseur du kit Swag 2 reste compatible avec toutes les résistances de la gamme GT Core de Vaporesso." + "\n" + "\n" + 
            "Avec son ergonomie et sa taille compacte, le kit Swag 2 pourrait bien être une référence en matière de vape en inhalation directe sur tous les terrains." +
            "Léger, robuste et performant, ce nouveau kit de Vaporesso s'adresse aux vapoteurs qui aiment les beaux objets et les beaux nuages !"+ "\n" + "\n" + 
            "Le kit Swag 2 est fabriqué par Vaporesso." + "\n" + "\n" +" Accu non fourni.", 
            shortDescription: "Un kit compact et simple pour l'inhalation direct. Avec une box simple accu 18650 et le clearomiseur NRG PE",
            price: 42.90,
            pictures: ["kit_swag_2_vaporesso_BLACK", "kit_swag_2_vaporesso_BLUE", "kit_swag_2_vaporesso_GREEN", "kit_swag_2_vaporesso_PURPLE", 
            "kit_swag_2_vaporesso_RED", "kit_swag_2_vaporesso_ROSE", "kit_swag_2_vaporesso_SILVER"],
            categories: [Categories.boxEcig, Categories.allKits, Categories.advancedPack],
            brand_id: 0,
            colors: ["BLACK", "BLUE", "GREEN", "PURPLE", "RED", "ROSE","SILVER"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 24,
            name: "RESISTANCES MESH Z" + "\n" + "COIL ZEUS GEEK VAPE" ,
            description: "Les résistances Mesh Z coils Zeus sont compatibles avec le clearomiseur Zeus Sub Ohm Tank Geek Vape. Faciles à installer, elle se" +
            "glissent à l'intérieur du réservoir sans aucun vissage. Ces résistances Z1 et Z2 sont constituées de mesh en Kanthal A1 pour une chauffe rapide," +
            "sans goûts parasites." + "\n" + "\n" + "Les résistances Mesh Z coils sont disponibles en plusieurs versions :" + "\n" + "\n" + "   • Mesh Z1 Coil" +
            "KA1 : 0.40Ω, en Kanthal A1, à utiliser entre 60 et 70 watts"+ "\n" + "    • Mesh Z2 Coil KA1 : 0.20Ω, en Kanthal A1, à utiliser entre 70 et 80" +
            "watts" + "\n" + "\n" +
            "Les résistances Mesh Z coils Zeus sont fabriquées par Geek Vape." + "\n" + "\n" +" Résistances vendues à l'unité.", 
            shortDescription: "Des résistances en mesh et Kanthal A1 pour le clearomiseur Zeus Sub Ohm Tank",
            price: 2.80,
            pictures: ["resistances_meshzcoil_zeus_02", "resistances_meshzcoil_zeus_02_2", "resistances_meshzcoil_zeus_04", "resistances_meshzcoil_zeus_04_2"],
            categories: [Categories.resistance],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: ["O.4 OHM", "O.2 OHM"],
            ohmValue: ""
        },
        {
        id: 25,
            name: "DRIP TIP 810" + "\n" + "AG+01 HELLVAPE" ,
            description: "Ce drip-tip au format 810 a une taille prévue pour une grosse production de vapeur. Compatible avec le standard 810, le drip-tip 810 Ag+ 01 " +
            "est fabriqué avec un mélange de résine et d'Ag+, matériau antibactérien et antimicrobien." + "\n" + "\n" + "Le drip-tip 810 Ag+ 01 est disponible en" + 
            "plusieurs couleurs. Les motifs et couleurs varient à chaque modèle (photos non contractuelles)." + "\n" + "\n" + "Le drip-tip 810 Ag+ 01 est fabriqué" + 
            "par Hellvape.", 
            shortDescription: "Drip-tip au standard 810, long et large pour l'inhalation directe et composé de résine et d'AG+.",
            price: 4.90,
            pictures: ["driptip_810ag01_hellvape_A", "driptip_810ag01_hellvape_A_2", "driptip_810ag01_hellvape_B", "driptip_810ag01_hellvape_B_2", 
            "driptip_810ag01_hellvape_C", "driptip_810ag01_hellvape_C_2", "driptip_810ag01_hellvape_D", "driptip_810ag01_hellvape_D_2","driptip_810ag01_hellvape_E", "driptip_810ag01_hellvape_E_2"],
            categories: [Categories.driptip],
            brand_id: 0,
            colors: ["A","B", "C", "D", "E"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 25,
            name: "RESERVOIR COSMO" + "\n" + "BULB 4 ML" ,
            description: "Ce réservoir Cosmo Bulb vous permet de remplacer le tank usagé de votre clearomiseur Cosmo de Vaptio. Sa forme convexe permet également " +
            "d'augmenter la contenance du clearomiseur pour passer de 2 à 4 ml." + "\n" + "\n" + "Le réservoir Cosmo Bulb 4 ml est fabriqué par Vaptio.",
            shortDescription: "Un réservoir de remplacement pour le clearomiseur Cosmo de Vaptio. Contenance de 4 ml et forme de bulle.", 
            price: 2.90,
            pictures: ["reservoir_cosmobulb_4ml_vaptio", "reservoir_cosmobulb_4ml_vaptio_2"],
            categories: [Categories.tank, Categories.pieceAtomizer],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["4 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 26,
            name: "HEISENBERG",
            description: "Eliquide Vampire Vape Heisenberg: Un liquide subtil aux nuances fruitées et fraîches. Cette recette secrète ne vous laissera pas" +
            "indifférent !"+ "\n" + "\n" + "Disponible en 10 ml." + "\n" + "\n" + "Les 60/40 PG/VG ont un taux de nicotine au choix de: 0, 6, 12 ou 18 mg/ml." + "\n" + "\n" + "Le 50/50 PG/VG pour le 3 mg/ml ",
            shortDescription: "Un liquide subtil aux nuances fruitées et fraîches. Cette recette secrète ne vous laissera pas indiffèrent !", 
            price: 5.90,
            pictures: ["heisenberg"],
            categories: [Categories.juice, Categories.favoriteJuice, Categories.topTenJuice, Categories.topFreshJuice, Categories.topFruitJuice, Categories.topUkJuice, Categories.fruitJuice, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["O MG","3 MG", "6 MG", "12 MG", "18 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 27,
            name: "CLASSIC N1" + "\n" + "MARIE JEANNE" ,
            description: "E liquide Classic N°1 Marie Jeanne. Pour les vapoteurs désireux de retrouver des saveurs de Classic blond." + "\n" + "\n" + "Le e liquide Classic" +
            "N°1 de la gamme Tradition Marie Jeanne est conforme aux exigences légales sur la commercialisation des e liqudes CBD (cannabinoïdes). " + "\n" + "\n" + "Les e " +
            "liquides Marie Jeanne ont une composition de 80% de PG et 20% de VG. Disponibles en flacon de 10 ml et plusieurs taux de CBD : 0mg, 50 mg, 100 mg, 300 mg, " +
            "600 mg."+ "\n" + "\n" + "E Liquide CBD fabriqué en France par Marie Jeanne.",
            shortDescription: "E liquide CBD pour les vapoteurs désireux de retrouver des saveurs de Classic blond", 
            price: 5.90,
            pictures: ["classicn1_mariejeanne"],
            categories: [Categories.juice, Categories.cbdJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["0 MG", "50 MG", "100 MG", "300 MH", "600 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 27,
            name: "PACK CHARGEUR MC2" + "\n" + "ACCU VTC6 18650" ,
            description: "Avec ce Pack MC2 VTC6 18650 vous obtenez 2 accus et leur chargeur pour ne jamais tomber à cours d'énergie pour votre cigarette électronique. " +
            "Ce kit se compose du chargeur MC2 fabriqué par XTAR et de deux accus VTC6 18650 3000 mAh 30A. Du matériel simple et efficace léger et discret." + "\n" + "\n" + "L'accu" +
            "VTC6 18650 3000 mAh 30A est fabriqué par Sony." + "\n" + "\n" + "Le chargeur MC2 est fabriqué par Xtar.",
            shortDescription: "Avec ce Pack MC2 VTC6 18650 vous obetnez 2 accus et leur chargeur pour ne pas tomber à cours...", 
            price: 23.90,
            pictures: ["packchargeur_mc2_18650"],
            categories: [Categories.battery, Categories.goodPlanExpert, Categories.favoriteExpert, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 28,
            name: "KENDO VAPE COTTON" + "\n" + "GOLD EDITION" ,
            description: "Le Kendo Vape Cotton Gold Edition est un coton organique cultivé au Japon et conditionné en Malaisie par des fans de vape. Le Kendo Vape Cotton " +
            "Gold Edition est un coton très résistant à la chaleur et convient parfaitement au matériel reconstructible et particulièrement les drippers. En effet, le " +
            "Kendo Vape Cotton a des propriétés telles qu'il n'est pas nécessaire de le remplacer à chaque nouveau liquide. Un plus remarquable pour les amateurs de vape " + 
            "en RDA." + "\n" + "\n" + "La version Gold Edition du Kendo Vape Cotton est conditionnée en sachet hermétique en bande de 1 mètre de fibre. Des centaines de " +
            "montages en perspective." + "\n" + "\n" + "Fabriqué en Malaisie par Kendo Vape Cotton.",
            shortDescription: "Le Kendo Vape Cotton Gold edition est un coton organique cultivé au Japon et conditionné en ...", 
            price: 4.50,
            pictures: ["kendovape_cottongoldedition", "kendovape_cottongoldedition_2", "kendovape_cottongoldedition_3"],
            categories: [Categories.cotonFiber],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 29,
            name: "TOP CAP VAUBAN" + "\n" + "VOLUTE MODZ" ,
            description: "Changez le design de votre atomiseur Vauban grâce aux top caps aux finitions spéciales et gravées, de haute qualité, conçues par Volute" +
            "Modz." + "\n" + "\n" + "Les finitions proposées sont :" + "\n" + "\n" + "  • GP Noir" + "\n" + "   • GP SS Pol" + "\n" + "    • GP Or" + "\n" + 
            "   • GP SS Brush" + "\n" + "   • GP Satin" + "\n" + "\n" + "Finitions unies :" + "\n" + "\n" + "   • SS Poli" + "\n" + "   • SS Brush" + "\n" + 
            "   • Satin" + "\n" + "   • Noir" + "\n" + "   • Or" + "\n" + "\n" + 
            "Le Top Cap Vauban est fabriqué par Volute Modz.",
            shortDescription: "Un top cap pour le dripper Vanban, disponible en finitions spéciales", 
            price: 27.50,
            pictures: ["topcap_vauban_volutemodz_GOLD", "topcap_vauban_volutemodz_GOLD_2", "topcap_vauban_volutemodz_GPBLACK", "topcap_vauban_volutemodz_GPBLACK_2", "topcap_vauban_volutemodz_GPGOLD", "topcap_vauban_volutemodz_GPGOLD_2",
            "topcap_vauban_volutemodz_GPSATIN", "topcap_vauban_volutemodz_GPSATIN_2", "topcap_vauban_volutemodz_GPSSBRUSH", "topcap_vauban_volutemodz_GPSSBRUSH_2", "topcap_vauban_volutemodz_GPSSPOLI", "topcap_vauban_volutemodz_GPSSPOLI_2", 
            "topcap_vauban_volutemodz_NOIR", "topcap_vauban_volutemodz_NOIR_2", "topcap_vauban_volutemodz_SATIN", "topcap_vauban_volutemodz_SATIN_2", "topcap_vauban_volutemodz_SSBRUSH", "topcap_vauban_volutemodz_SSBRUSH_2", 
            "topcap_vauban_volutemodz_SSPOLI", "topcap_vauban_volutemodz_SSPOLI_2"],
            categories: [Categories.pieceAtomizer, Categories.highEndExpert],
            brand_id: 0,
            colors: ["GP NOIR", "GP OR", "GP SS BRUSH", "GP SS POLI", "GP SATIN", "NOIR", "OR", "SS BRUSH", "SS POLI", "SATIN"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 30,
            name: "PIPELINE BLEND" + "\n" + "FUEL" ,
            description: "Eliquide  PIPELINE Blend FUEL. E-Liquide au goût de Classic léger sucré, avec des accents de noisette et de vanille très subtils." +
            "Gros hit en gorge et volume important de vapeur." + "\n" + "\n" + "Le e Liquide Pipeline Blend est fabriqué par Fuel.",
            shortDescription: "E-Liquide en goût de Classic léger sucré, avec des accents de noisette et de vanille très subtils", 
            price: 5.90,
            pictures: ["fuel_pipeline_blend"],
            categories: [Categories.juice, Categories.classicJuice, Categories.mixNVapeJuice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["O MG", "3 MG", "6 MG", "12 MG", "18 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },
        {
        id: 31,
            name: "PACK CINEMA" + "\n" + "100 ML" ,
            description: "Découvrez notre Pack Cinema 100 ml composé des deux e liquides stars de Cloud of Icarus. Ce pack très gourmands vous permettra de " +
            "découvrir les deux versions du e liquide Cinema. Le premier du nom est une saveur pop-corn custard, crêmeuse et vanillée. Le Cinema Reserver Act 2 " +
            "met quant à lui en scène du pain perdu gorgé de beurre,recouvert de caramel et de noix de pécan" + "\n" + "\n" + "Le Pack Cinema contient deux flacons " +
            "unicorn de 100 ml, sans nicotine. Ratio de PG/VG : 30/70."+ "\n" + "\n" + "Les e liquides Cinema et Cinema Reserve Act 2 sont fabriqués aux Etats-Unis " +
            "par Cloud of Icarus.",
            shortDescription: "Un pack composé des deux versions du célèbre e liquide de Cloud of Icarus. Un must pour les grands gourmands", 
            price: 49.90,
            pictures: ["pack_cinema_100ml"],
            categories: [Categories.discoverJuice, Categories.juice, Categories.greedyJuice, Categories.bestSale, Categories.mixNVapeJuice],
            brand_id: 0,
            colors: ["ACT 1/ACT 2"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["100 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },    
        {
        id: 32,
            name: "HOOBA'Z ORIGINAL" + "\n" + " - READY TO DIE" ,
            description: "Avec le bon plan Hooba'z Original Ready To Diy, préparez facilement 230 ml de e liquide Hooba'z ! Cette méthode de DIY ne vous demandera "+
            "aucun calcul de dosage au préalable." + "\n" + "\n" + "Le Hooba'z Original vous rappellera ces bons vieux rouleaux de chewing-gum goût fraise pour une " +
            "vape garantie pleine de nostalgie !"+ "\n" + "\n" + "La base Born to Diy contient quant à elle 50% de PG et 50 % de VG. Elle pourra être nicotinée en "+
            "3, 6, 9 ou 12 mg/ml en fonction du nombre de boosters que vous y ajouterez."+ "\n" + "\n" + "La base 50/50 de PG/VG et les Boosters de nicotine sont " +
            "fabriqués par Le Petit Vapoteur"+ "\n" + "\n" + "Le concentré Hooba'z Original 10 ml est fabriqué en France par Vape 47."+ "\n" + "\n" + "Temps de "+
            "maturation conseillé : 2 à 3 semaines",
            shortDescription: "Préparez-vous facilement 230 ml de liquide Hooba'z Original grâce au pack Ready To Diy.", 
            price: 17.90,
            pictures: ["hoobazoriginal_readytodiy", "hoobazoriginal_readytodiy_2", "hoobazoriginal_readytodiy_3", "hoobazoriginal_readytodiy_4"],
            categories: [Categories.readyToDiy, Categories.goodPlanDiy, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["3 MG", "6 MG", "9 MG", "12 MG"],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },  
        {
        id: 33,
            name: "ARÔME FRUITS" + "\n" + "PASSION SOLUBARÔME" ,
            description: "Arôme Fruits Passion Solubarôme" + "\n" + "\n" + "Flacon de 10 ml avec sécurité enfant."+ "\n" + "\n" + "Attention cet arôme doit être" +
            "dilué dans une base.",
            shortDescription: "Arôme Fruits Passion Solubarôme Flacon de 10 ml avec sécurité enfant. Attention...", 
            price: 1.90,
            pictures: ["arome_fruitspassion_solubarome"],
            categories: [Categories.aroma, Categories.fruitAroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },  
        {
        id: 34,
            name: "ARÔME PINA COLADA" + "\n" + "V2 CAPELLA" ,
            description: "Arôme Pina Colada V2 de chez Capella Flavors Drops." + "\n" + "\n" + "La célèbre boisson à base de rhum, de lait de coco et d'ananas !"+ "\n" + "\n" + 
            "Flacon goutte à goutte de 13 ml. " + "\n" + "\n" + "Attention cet arôme s'utilise uniquement avec une base.",
            shortDescription: "Arôme Pina Colada V2 de chez Capella Flavors Drops. La célèbre boisson à...", 
            price: 3.90,
            pictures: ["arome_pinacoladav2_capella"],
            categories: [Categories.aroma, Categories.drinkAroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },  
        {
        id: 35,
            name: "ARÔME VDLV" + "\n" + "MENTHE FRAICHE" ,
            description: "Arôme Vincent Dans Les Vapes Menthe Fraîche. " + "\n" + "\n" + "Voluptueuse promenade végétale qui s’épand comme une vague éclatante de " +
            "fraîcheur. Elle rappelle à la fois les thés du Maghreb et la note de fraîcheur délicatement ajoutée à une salade de fruit."+ "\n" + "\n" + "Un arôme " +
            "de menthe fraîche produit à façon dans la région de Grasse. " + "\n" + "\n" + "Flacon de 10 ml avec sécurité enfant." + "\n" + "\n" + "Attention cet " +
            "arôme doit être dilué dans une base." + "\n" + "\n" + "Fabriqué en France par Vincent Dans Les Vapes",
            shortDescription: "Arôme Vincent Dans Les Vapes Menthe Fraîche. Voluptueuse promenade végétale qui ...", 
            price: 4.90,
            pictures: ["arome_vdlv_menthefraiche"],
            categories: [Categories.mentholAroma, Categories.aroma, Categories.favoriteDiy],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        }, 
        {
        id: 36,
            name: "PINKMAN 10ML" + "\n" + "CONCENTRE VAMPIRE VAPE" ,
            description: "Arôme concentré Pinkman par Vampire Vape, une saveur fraiche d'orange, de pamplemousse et de citron." + "\n" + "\n" + "Flacon de 10 ml " +
            "enfin disponible !"+ "\n" + "\n" + "A mélanger avec une base PG/VG de votre choix. " + "\n" + "\n" + "Flacon de 10 ml avec sécurité enfant." + "\n" + "\n" + 
            "Le concentré Pinkman 10 ml est fabriqué par Vampire Vape au Royaume-Uni." + "\n" + "\n" + "Fabriqué en France par Vincent Dans Les Vapes",
            shortDescription: "arôme concentré Pinkman par Vampire Vape, Une saveur fraîche d'orange, de pamplemousse et de citron...", 
            price: 5.50,
            pictures: ["pinkman10ml_concentre_vampirevape"],
            categories: [Categories.topTenDiy, Categories.aroma, Categories.fruitAroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },     
        {
        id: 36,
            name: "CARAMEL BUERRE" + "\n" + "SALÉ" ,
            description: "Arôme concentré Caramel Beurre Salé par Supervape : un arôme concentré au caramel et au beurre salé." + "\n" + "\n" + "Béni soit Henri " +
            "Le Roux, chocolatier de Quiberon (Morbihan) qui, en 1977, mit au point un caramel au beurre demi-sel auquel il ajouta des noix, des noisettes et des " +
            "amandes concassées, aboutissant à une texture unique. A texture unique, sensation unique avec cette composition de Supervape qui rend hommage à ce bon " +
            "Henri, et à travers lui, à toute la Bretagne."+ "\n" + "\n" + "Flacon de 10ml. Recette d'arômes concentrés à diluer dans de la base. Ne pas vaper seul " +
            "!" + "\n" + "\n" + "Fabriqué en france.",
            shortDescription: "arôme concentré Caramel Beurre Salé par Supervape : un arôme concentré au ...", 
            price: 3.99,
            pictures: ["arome _caramelbeurresale_SUPERVAPE"],
            categories: [Categories.greedyAroma, Categories.aroma],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },  
        {
        id: 37,
            name: "BOX MVV II" + "\n" + "DOVPO" ,
            description: "Deuxième version de la box à double accus de Dovpo, la box MVV II est un mod électronique équipée d'un potentiomètre. Elle propose ainsi " +
            "une vape en voltage variable de 1.0V à 8.0V, soit une puissance maximale de 280 watts. Cette box MVV 2 propose quelques nouveautés apétissantes comme " +
            "une superbe finition par embossage. Une technique d'impression en relief qui fait son effet." + "\n" + "\n" + "A l'intérieur de la box MVV 2, nous " +
            "trouvons une connexion de type USB-C pour recharger le mod avec ses accus. Le câble USB Type-C est d'ailleurs fourni. Sur un chassis noir et léger "+
            "(alliage de zinc), nous avons une connexion 510 centrale qui accueillera de nombreux atomiseurs et qui sera parfaitement flush avec des diamètres de "+
            "24 mm. La plage de résistance est de 0.08Ω à 3.50Ω, permettant un large choix de résistances et une vape en inhalation directe ou indirecte."+ "\n" + "\n" + 
            "La box MVV II est fabriquée par Dovpo." + "\n" + "\n" + "Accus non fournis. ",
            shortDescription: "Un mod double accus 18650 avec potentiomètre, voltage variable et impressions en relief. Léger et puissant.", 
            price: 38.99,
            pictures: ["box_mvv2_dovpo_DEVIL","box_mvv2_dovpo_DEVIL_2", "box_mvv2_dovpo_DEVIL_3", "box_mvv2_dovpo_DRAGONSAMOURAI", "box_mvv2_dovpo_DRAGONSAMOURAI_2",
            "box_mvv2_dovpo_DRAGONSAMOURAI_3", "box_mvv2_dovpo_HENNYA", "box_mvv2_dovpo_HENNYA_2", "box_mvv2_dovpo_HENNYA_3", "box_mvv2_dovpo_SKULLROSES", 
            "box_mvv2_dovpo_SKULLROSES_2", "box_mvv2_dovpo_SKULLROSES_3", "box_mvv2_dovpo_SPIRIT", "box_mvv2_dovpo_SPIRIT_2", "box_mvv2_dovpo_SPIRIT_3", 
            "box_mvv2_dovpo_WHITEDEVIL", "box_mvv2_dovpo_WHITEDEVIL_2", "box_mvv2_dovpo_WHITEDEVIL_3"],
            categories: [Categories.boxMod],
            brand_id: 0,
            colors: ["DEVIL", "DRAGON SAMURAÏ", "HANNYA", "SKULL & ROSES", "SPIRIT", "WHITE DEVIL"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },   
        {
        id: 38,
            name: "RESISTANCES GTC" + "\n" + "GOBALL FUMYTECH" ,
            description: "Les résistances GTC assurent production de vapeur et excellent rendu de saveurs à l'atomiseur Goball de chez Fumytech." + "\n" + "\n" + 
            "   • GTC 1.2 ohm : à utiliser entre 10 et 12 W pour une vape serrée."+ "\n" + "   • GTC 0,7 ohm : à utiliser entre 17 et 22W pour une vape plus" +
            "chaude et plus grosse production de vapeur." + "\n" + "\n" + "La résistance GTC est fabriquée par Fumytech "+ "\n" + "\n" + "Résistance vendue à l'unité.",
            shortDescription: "Des résistances GTC axée MTL pour l'atomiseur Goball de Fumutech.",
            price: 2.38,
            pictures: ["resistances_gtc_goballfumytech","resistances_gtc_goballfumytech_2", "resistances_gtc_goballfumytech_3", "resistances_gtc_goballfumytech_4"],
            categories: [Categories.resistance],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: ["0.70 OHMS", "1.2 OHMS"],
            ohmValue: ""
        },     
        {
        id: 39,
            name: "CLEAROMISEUR GTX" + "\n" + "TANK 18 VAPORESSO" ,
            description: "Le clearomiseur GTX Tank 18 de chez Vaporesso est compact et astucieusement conçu pour avoir une belle autonomie de vape. Le GTX tank 18 " +
            "offre une vape savoureuse orientée plutôt MTL grâce à sa bague d'airflow précise. Il est compatible avec les deux résistances GTX Mesh(1.2Ω et 0.8Ω) " +
            "qui vous offriront différentes sensations de vape avec plus ou moins de vapeur, tout en gardant un maximum de saveurs." + "\n" + "\n" + "Le clearomiseur "+
            "GTX Tank 18 possède tous les atouts pour vous faciliter la vie : reservoir généreux de type bulb de 3 ml, remplissage facile par le haut, changement de " +
            "résistance propre sans pas de vis. Un clearomiseur performant de petit diamètre pour débutants et ceux qui souhaitent un produit passe partout pour les " +
            "déplacements."+ "\n" + "\n" + "Le clearomiseur GTX Tank 18 est fabriqué par Vaporesso. ",
            shortDescription:"Un clearomiseur compact et performant de contenance 3 ml, axé MTL et contrôle d'airflow." ,
            price: 18.90,
            pictures: ["clearomiseur_gtxtank18_vaporesso_BLACK","clearomiseur_gtxtank18_vaporesso_BLACK_2", "clearomiseur_gtxtank18_vaporesso_BLACK_3", 
            "clearomiseur_gtxtank18_vaporesso_SILVER", "clearomiseur_gtxtank18_vaporesso_SILVER_2", "clearomiseur_gtxtank18_vaporesso_SILVER_3"],
            categories: [Categories.clearomizerPod],
            brand_id: 0,
            colors: ["BLACK", "SILVER"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },    
        {
        id: 40,
            name: "SKARABÄUS PRO" + "\n" + "MAX DLC TAIFUN" ,
            description: "Le mod Skarabäus Pro Max DLC est une version luxueuse du célèbre tube de Taifun. Celui-ci bénéficie d'une finition 'Diamond Like Carbon'," +
            "une technique qui résiste 'comme le diamant' aux frottements et à la corrosion, plus que l'acier. Le mod Skarabäus Pro Max DLC est un mod tubulaire " +
            "compatible avec les accus de type 20700 et 21700. Il a un diamètre de 25 mm." +"\n" + "\n" + "Equipé d'un switch optico-magnétique et d'une LED comme" +
            "témoin de charge de l'accu, le mod Skarabäus Pro Max DLC propose une vape non régulée mais dispose de protections électroniques pour vapoter safe. " +
            "Il accepte les résistances à partir de 0.10 ohm."+ "\n" + "\n" + "Le mod Skarabäus Pro Max DLC Taifun est fabriqué en Allemagne par Smokerstore." + "\n" + 
            "\n" + "Accu non fourni.",
            shortDescription: "Mod high-end avec switch optico-magnétique et finition DLC, compatible avec les accus 20700 et 21700. 25 mm de diamètre",
            price: 259.00,
            pictures: ["skarabaus_promaxdlc_taifun","skarabaus_promaxdlc_taifun_2", "skarabaus_promaxdlc_taifun_3"],
            categories: [Categories.electroMod, Categories.highEndExpert],
            brand_id: 0,
            colors: ["NOIR"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },    
        {
        id: 41,
            name: "CHARGEUR MINIKIN" + "\n" + "V3 ASMODUS" ,
            description: "Cet accessoire permet de recharger la box Minikin V3. Ce chargeur a une capacité pouvant aller jusqu'à 2A pour un chargement complet " +
            "des accus de la box Minikin V3 sans les retirer du mod. Le chargeur Minikin V3 est fabriqué en polycarbonate et dessiné pour offrir un beau design " +
            "avec le mod Minikin V3. Le chargeur se connecte avec le câble USB-C fourni." +"\n" + "\n" + "Le chargeur Minikin V3 est fabriqué par Asmodus.",
            shortDescription: "Un chargeur compatible avec la box Minikin V3. Il permet un rechargement sans retirer les accus.",
            price: 17.50,
            pictures: ["chargeur_minikinv3_asmodus","chargeur_minikinv3_asmodus_2", "chargeur_minikinv3_asmodus_3", "chargeur_minikinv3_asmodus_4"],
            categories: [Categories.pieceMod],
            brand_id: 0,
            colors: ["NOIR"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },                    
        {
        id: 42,
            name: "ATOMISEUR ASTON RTA" + "\n" + "ASTON VAPE" ,
            description: "L'atomiseur Aston RTA Aston Vape est un reconstructible de 24 mm de diamètre qui offre une vape en inhalation indirecte ou en inhalation " +
            "directe restreinte. Polyvalent, il possède un plateau de montage simple coil. Le design de l'atomiseur Aston RTA est signé Alliancetech Vapor. On " +
            "reconnaît le savoir-faire du français avec ce plateau facile à maîtriser et à l'airflow précis. L'aération peut s'ajuster par la base de l'atomiseur, " +
            "avec trois ouvertures et deux positions." +"\n" + "\n" + "L'atomiseur Aston RTA est fait d'Inox 304 L, il est livré avec un réservoir en Pyrex et un "+
            "réservoir opaque en PSU. Tous deux ont une contenance de 2,4 ml de e liquide. Au goût du jour, le remplissage de l'Aston RTA s'effectue par le haut, " +
            "en dévissant le top-cap."+"\n" + "\n" + "L'atomiseur Aston RTA est fabriqué par Aston Vape.",
            shortDescription: "Un atomiseur de 24 mm, simple coil, à la fois MTL et DL restreint. Le design est signé Alliancetech Vaper",
            price: 59.90,
            pictures: ["atomiseur_astonrta_astonvape_MATTESS","atomiseur_astonrta_astonvape_MATTESS_2", "atomiseur_astonrta_astonvape_SS", "atomiseur_astonrta_astonvape_SS_2"],
            categories: [Categories.rebuildable],
            brand_id: 0,
            colors: ["MATTE SS", "SS"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },               
        {
        id: 43,
            name: "TOOFRUITS AUX" + "\n" + "SELS DE NICOTINE" ,
            description: "E liquide Toofruits Le Petit Vapoteur. Envie de vous rafraîchir ? Dégustez un savoureux mix de fruits avec le e liquide Toofruits. Une " +
            "vape garantie très sucrée ! " +"\n" + "\n" + "E liquide Le Petit Vapoteur conditionné en flacon de 10 ml PET avec protection enfant. Taux de PG/VG "+
            "de 50/50 et avec sels de nicotine."+"\n" + "\n" + "Le e liquide Toofruits est produit en France par Le Petit Vapoteur.",
            shortDescription: "Savourez un excellent mix de fruits avec sels de nicotine",
            price: 5.50,
            pictures: ["eliquide_toofruits-LPV"],
            categories: [Categories.saltJuice, Categories.fruitJuice, Categories.juice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["O MG", "10 MG", "2O MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        }, 
        {
        id: 44,
            name: "MOD TAUREN MAX" + "\n" + "THUNDERHEAD CREATIONS" ,
            description: "Le Mod Tauren Max de Thunderhead Creations s'adresse aux amateurs de mécas tubulaires et puissants. Le Tauren Max est compatible avec les " +
            "accus 20700, 21700 et 18650 (avec son adaptateur). Tout en laiton, il possède une connexion hybride pour les atomiseurs de 24 mm de diamètre maximum. " +
            "Sa ligne est ergonomique pour une prise en main et un appui sur le switch confortable." +"\n" + "\n" + "Le mod Tauren Max innove avec un switch à bille " +
            "breveté inventé par Thunderhead Creations qui assure un contact à 360° pour un allumage parfait et plus confortable. Le switch est aussi résistant à la " +
            "poussière, aux chocs et waterproof. Le mod est entièrement verrouillable et sécurisé." +"\n" + "\n" + "Le mod Tauren Max est fabriqué par Thunderhead " +
            "Creations." +"\n" + "\n" + "Accu non fourni.",
            shortDescription: "Un mod méca en laiton compatible 20700, 21700 et 18650. Avec un switch à bille verrouillable et connexion 24 mm",
            price: 61.90,
            pictures: ["mod_taurenmax_TC_BRASS", "mod_taurenmax_TC_BRASS_2", "mod_taurenmax_TC_BRASS_3", "mod_taurenmax_TC_BRASSBLACK", "mod_taurenmax_TC_BRASSBLACK_2",
            "mod_taurenmax_TC_BRASSBLACK_3", "mod_taurenmax_TC_BRASSGOLD", "mod_taurenmax_TC_BRASSGOLD_2", "mod_taurenmax_TC_BRASSGOLD_3", "mod_taurenmax_TC_BRASSGREEN",
            "mod_taurenmax_TC_BRASSGREEN_2", "mod_taurenmax_TC_BRASSGREEN_3", "mod_taurenmax_TC_BRASSGUN", "mod_taurenmax_TC_BRASSGUN_2", "mod_taurenmax_TC_BRASSGUN_3",
            "mod_taurenmax_TC_BRASSRED", "mod_taurenmax_TC_BRASSRED_2", "mod_taurenmax_TC_BRASSRED_3", "mod_taurenmax_TC_BRASSWHITE", "mod_taurenmax_TC_BRASSWHITE_2",
            "mod_taurenmax_TC_BRASSWHITE_3"],
            categories: [Categories.mechMod],
            brand_id: 0,
            colors: ["BRASS", "BRASS WHITE", "BRASS BLACK", "BRASS GOLD", "BRASS GREEN", "BRASS GUN", "BRASS RED"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },     
        {
        id: 45,
            name: "KIT PIMP" + "\n" + "BASTARD ANIMODZ" ,
            description: "Le kit Pimp Bastard Animodz transforme l'allure de l'atomiseur Bastard RTA. Le kit comprend deux bagues colorées pour le drip-tip et " +
            "l'airflow. Deux bagues en acier (plaqué or pour la version Gold) qui sont entièrement compatibles avec l'atomiseur Bastard. La bague de la base "+
            "respecte parfaitement les découpes des airflows." +"\n" + "\n" + "Le kit Pimp est compatible avec le Bastard RTA mais aussi aussi son extension " +
            "RDA/BF !"+"\n" + "\n" + "Le kit Pimp Bastard est fabriqué par Animodz. ",
            shortDescription: "Ce kit comprend deux bagues colorées en acier pour le drip-tip et l'airflow du Bastard RTA et son extension RDA/BF",
            price: 25.00,
            pictures: ["kit_pimpbastard_animodz_BLACK", "kit_pimpbastard_animodz_BLACK_2", "kit_pimpbastard_animodz_BLACK_3", "kit_pimpbastard_animodz_COPPER",
            "kit_pimpbastard_animodz_COPPER_2", "kit_pimpbastard_animodz_COPPER_3", "kit_pimpbastard_animodz_GOLD", "kit_pimpbastard_animodz_GOLD_2",
            "kit_pimpbastard_animodz_GOLD_3", "kit_pimpbastard_animodz_SS", "kit_pimpbastard_animodz_SS_2", "kit_pimpbastard_animodz_SS_3"],
            categories: [Categories.pieceAtomizer],
            brand_id: 0,
            colors: ["BLACK", "COPPER", "GOLD", "STAINLESS STEEL"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },            
        {
        id: 46,
            name: "DÉCAPSULEUR MAGNÉTIQUE" + "\n" + "5 EN 1 MACDIYER" ,
            description: "Le décapsuleur magnétique 5 en 1 Macdiyer retire tous les droppers et bouchons des flacons de e liquides, ainsi que les pipettes des " +
            "boosters. Le décapsuleur 5 en 1Macdiyer facilite le transvasement des boosters et des arômes concentrés et de verser son booster directement dans " +
            "le flacon de e liquide sans se salir les doigts." +"\n" + "\n" + "Notre décapsuleur Macdiyer est 5 en 1 Macdiyer peut retirer les pipettes et " +
            "bouchons des flacons de 10, 30, 50, 60 et de 120 ml. Il possède deux magnets pour ne pas perdre son décapsuleur. "+"\n" + "\n" + "Le décapsuleur " +
            "magnétique 5 en 1 Macdiyer et livré avec sa chaînette tour de cou.",
            shortDescription: "Un décapsuleur magnétique pour retirer proprement les pipettes et bouchons des flacons de 10 ml jusqu'à 120 ml",
            price: 2.90,
            pictures: ["decapsuleur_5en1_macdiyer", "decapsuleur_5en1_macdiyer_2"],
            categories: [Categories.accessoryDiy],
            brand_id: 0,
            colors: ["NOIR"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },      
        {
        id: 47,
            name: "FLACON EASY FILL" + "\n" + "BOTTLE 60 ML LPV" ,
            description: "Le flacon Easy Fill Bottle 60ml Le Petit Vapoteur permet de préparer ses e liquides plus facilement avec une pipette amovible pratique " +
            "et propre. Gradué jusqu'à 55ml, le flacon Easy Fill Bottle peut contenir 60 ml de e liquide. Le flacon possède également un bouchon avec sécurité " +
            "enfant. " +"\n" + "\n" + "Préparer, mélanger vos e liquides DIY en poussant simplement la pipette vers l'arrière. L'essayer c'est l'adopter !",
            shortDescription: "Permet de préparer 60 ml de e liquide plus facilement avec une pipette amovible pratique et propre",
            price: 1.30,
            pictures: ["easyfillbottle_60ml-LPV", "easyfillbottle_60ml-LPV_2", "easyfillbottle_60ml-LPV_3", "easyfillbottle_60ml-LPV_4"],
            categories: [Categories.accessoryDiy, Categories.bestSale],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["60 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },            
        {
        id: 48,
            name: "KIT LUXE" + "\n" + "ZEUS X" ,
            description: "Le kit Luxe Zeus X est un combo racé et performant pour les amateurs de matériel reconstructible. Ce kit propose le nouveau fleuron de " +
            "Vaporesso : la box à double accus Luxe. Son chipset OMNI-board 4.0 sophistiqué et sa puissance de 220W sont parfaitement à l'aise avec le plus " +
            "gourmet des atomiseurs reconstructibles de Geek Vape : le Zeus X RTA." + "\n" + "\n" + "Le Zeus XRTA est un bel atomiseur de 25 mm de diamètre avec " +
            "une aération par le haut du réservoir. Cette position des airflows évite les fuites de e liquide. Equipé d'un plateau postless original, il accepte " +
            "les montages en double ou simple coil." + "\n" + "\n" + "Deux looks, deux contenances. Le Zeus X RTA peut, en effet, passer d'une contenance de 4,5 " +
            "ml à 3,5 ml et ainsi changer de forme. Pour cela, l'atomiseur est livré avec un réservoir droit et pyrex bulbe." + "\n" + "\n" + "Avec la box Luxe, " +
            "l'association est parfaite esthétiquement et techniquement. La Luxe a de nombreux modes de vape et une plage de résistance entre 0,03 ohm et 5.0 ohms " +
            "qui offre de nombreuses possibilités de montage. Pour résumer : un kit pour l'inhalation directe avec un confort de vape total !" + "\n" + "\n" + "La " +
            "box Luxe est fabriquée par Vaporesso et l'atomiseur reconstructible Zeus X RTA par Geek Vape." + "\n" + "\n" + "Accus non fournis.",
            shortDescription: "Un kit élégant et performant avec une box Luxe double accus 18650 et l'atomiseur reconstructible Zeus X RTA.",
            price: 67.90,
            pictures: ["kit_luxezeusxrta_BLACKBLACK", "kit_luxezeusxrta_BLACKBLACK_2", "kit_luxezeusxrta_BLACKREDBLACK", "kit_luxezeusxrta_BLACKREDBLACK_2",
            "kit_luxezeusxrta_BLUEIRIS", "kit_luxezeusxrta_BLUEIRIS_2", "kit_luxezeusxrta_RAINBOWRANIDOW", "kit_luxezeusxrta_RAINBOWRANIDOW_2",
            "kit_luxezeusxrta_SSGRENNAPE", "kit_luxezeusxrta_SSGRENNAPE_2", "kit_luxezeusxrta_SSSILVER", "kit_luxezeusxrta_SSSILVER_2"],
            categories: [Categories.expertPack, Categories.goodPlanExpert, Categories.boxEcig, Categories.favoriteExpert],
            brand_id: 0,
            colors: ["BLACK/BLACK", "BLUE/IRIS", "RAINDOW/RAINBOW", "RED/BLACK/RED", "STAINLESS STEAL/GREEN APE", "STAINLESS STEAL/SILVER"],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: [],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },      
        {
        id: 49,
            name: "APPLE & RASPBERRY" + "\n" + "GREEN STEM" ,
            description: "E liquide Apple & Raspberry Green Stem. Un délicieux e liquide CBD au goût de pommes vertes fraîches et framboises délicatement " +
            "acidulées. Apple & Raspberry incarne parfaitement le goût d'un été anglais frais." + "\n" + "\n" + "Le e liquide Apple & Raspberry de la gamme " +
            "Green Stem est conforme aux exigences légales sur la commercialisation des e liqudes CBD (cannabinoïdes). " + "\n" + "\n" + "Le e liquides Apple " +
            "& Raspberry Green Stem a une composition de 40% de PG et 60% de VG. Disponible en flacon de 10 ml avec trois taux de CBD : 100 mg, 250 mg ou 500 " +
            "mg." + "\n" + "\n" + "E Liquide Apple & Raspberry Green Stem est fabriqué au Royaume-Uni par Green Stem.",
            shortDescription: "Saveur pommes vertes fraîches et framboises délicatement acidulées",
            price: 14.90,
            pictures: ["eliquide_appleraspberry_greenstem_100", "eliquide_appleraspberry_greenstem_250", "eliquide_appleraspberry_greenstem_500"],
            categories: [Categories.cbdJuice, Categories.juice],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: ["100 MG", "250 MG", "500 MG"],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
        },        
        {
        id: 50,
            name: "ADDITIF ETHYLMALTOL" + "\n" + "DIY IS NOT DEAD" ,
            description: "Additif Ethylmaltol Diy is not Dead. L'éthylmaltol est un exhausteur de goût employé pour renforcer les saveurs sucrées. Il apporte " +
            "des notes de bonbon sucré à vos compositions. Utilisé seul, l'éthylmaltol donne une saveur proche de la barbe à papa." + "\n" + "\n" + "L'additif " +
            "Ethylmaltol Diy is not Dead doit être mélangé avec une base de PG/VG de votre choix. " + "\n" + "\n" + "Conseil de dosage : 1%, 5 gouttes pour " +
            "10 ml." + "\n" + "\n" + "Les additifs Diy is not Dead sont fabriqués en France.",
            shortDescription: "Un exhausteur de goût employé pour renforcer les saveurs sucrées et apporte des notes sucrées à vos compositions.",
            price: 3.50,
            pictures: ["additif_ethylmaltol_diyisnotdead"],
            categories: [Categories.additive],
            brand_id: 0,
            colors: [],
            color: "",
            nicotineRates: [],
            nicotine: "",
            capacities: ["10 ML"],
            capacity: "",
            ohmValues: [],
            ohmValue: ""
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
