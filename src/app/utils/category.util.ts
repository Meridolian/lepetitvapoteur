export class CategoryUtil {

    //first category
    firstCategory: [string, string, string][] = [["JE DÉBUTE", "iBegin", "Category"], ["ECIGARETTES", "ecig", "Category"], 
    ["ELIQUIDES", "eliquide", "Category"], ["COIN DES EXPERTS", "expert", "Category"], ["DIY", "diy", "Category"], 
    ["BONS PLANS", "goodPlans", "Category"]];




    //i begin category
    iBeginCategory: [string, string, string][] = [["J'achète mon PACK", "buyPack", "ViewList"], 
    ["Je choisis ma ECIGARETTE", "chooseEcig", "ViewList"], ["Je choisis mon ELIQUIDE", "chooseEliquide", "ViewList"]];




    //ecigarette category
    ecigCategory: [string, string, string][] = [["NOS PACKS", "packs", "Category"], ["NOS TYPES D'E-CIGARETTES", "typeEcig", "Category"], 
    ["PIÈCES DÉTACHÉES", "sparePart", "Category"]];

    //if NOS PACKS
    packsCategory: [string, string, string][] = [["SIMPLE", "easyPack", "ViewList"], ["AVANCÉ", "advancedPack", "ViewList"], 
    ["EXPERT", "expertPack", "ViewList"], ["TOUT EN UN", "allInOnePack", "ViewList"], ["TOUS NOS KITS", "allKits", "ViewList"], 
    ["COUP DE COEUR", "favoritePack", "ViewList"]];

    //else if NOS TYPES D'E-CIGARETTES
    typeEcigCategory: [string, string, string][] = [["LES PODS", "pod", "ViewList"], ["LES TUBES", "tubes", "ViewList"], 
    ["LES BOXS", "box", "ViewList"], ["TOUS NOS MODÈLES", "allEcig", "ViewList"]];

    //else if PIÈCES DÉTACHÉES
    sparePartCategory: [string, string, string][] = [["BATTERIE", "battery", "ViewList"], ["CLEAROMISEUR - POD", "clearoPod", "ViewList"], 
    ["RÉSISTANCE", "resistance", "ViewList"], ["EMBOUT DRIP TIP", "dripTip", "ViewList"], ["RÉSERVOIR", "tank", "ViewList"], 
    ["ACCESSOIRES", "accessories", "Category"]];

    //if ACCESSOIRES in PIÈCES DÉTACHÉES
    accessoriesCategory: [string, string, string][] = [["RANGEMENT", "dustCover", "ViewList"], ["FLACON ET SERINGUE", "bottle", "ViewList"],
    ["ENTRETIEN", "maintenance", "ViewList"], ["CHARGEUR ET PCC", "charger", "ViewList"], ["PRODUITS DÉRIVÉS", "derivedProduct", "ViewList"]];




    //eliquide category
    eliquideCategory: [string, string, string][] = [["NOS E-LIQUIDES", "typeJuice", "Category"],
    ["NOS MARQUES ELIQUIDE", "juiceBrands", "ViewList"]];

    //if NOS E-LIQUIDES
    typeJuiceCategory: [string, string, string][] = [["TOUS NOS ELIQUIDES", "allJuice", "ViewList"], ["CLASSIC", "classicJuice", "ViewList"],
    ["MENTHE", "mentholJuice", "ViewList"], ["FRUITÉS", "fruitJuice", "ViewList"], ["BOISSONS", "drinkJuice", "ViewList"], 
    ["FRAIS", "freshJuice", "ViewList"], ["GOURMANDS", "greedyJuice", "ViewList"], ["COUP DE COEUR", "favoriteJuice", "ViewList"],
    ["LES TOPS", "topJuice", "Category"], ["DÉCOUVERTE", "discoverJuice", "ViewList"], ["10 ML", "10mlJuice", "ViewList"], 
    ["MIX 'N' VAPE", "mixNVapeJuice", "ViewList"], ["CBD", "cbdJuice", "ViewList"], ["SELS NICOTINE", "saltJuice", "ViewList"]];

    //if LES TOPS in JUICE CATEGORIES
    topJuiceCategory: [string, string, string][] = [["TOP 10", "top10Juice", "ViewList"], ["TOP CLASSIC", "topClassicJuice", "ViewList"],
    ["TOP GOURMAND", "topGreedyJuice", "ViewList"], ["TOP FRAICHEUR", "topFreshJuice", "ViewList"], ["TOP FRUITÉ", "topFruitJuice", "ViewList"],
    ["TOP FRANÇAIS", "topFrenchJuice", "ViewList"], ["TOP US", "topUsJuice", "ViewList"], ["TOP UK", "topUkJuice", "ViewList"],
    ["TOP MALAISIEN", "topMalaisiaJuice", "ViewList"], ["TOP MIX 'N' VAPE", "topMixNVapeJuice", "ViewList"]];




    //expert category
    expertCategory: [string, string, string][] = [["NOS INCONTOURNABLES", "expertEssential", "Category"], 
    ["BOX & MODS", "mods", "Category"], ["ATOMISEURS", "atomizer", "Category"]];

    //if NOS INCONTOURNABLES
    expertEssentialCategory: [string, string, string][] = [["KITS EXPERTS", "expertKit", "ViewList"], 
    ["CONFIGURATEUR", "configurator", "ViewList"], ["BOX DIY", "boxDiy", "ViewList"], ["BON PLAN", "expertGoodPlan", "ViewList"], 
    ["HIGH END", "highEndExpert", "ViewList"], ["COUP DE COEUR EXPERT", "favoriteExpert", "ViewList"]];

    //if BOX & MODS
    modsCategory: [string, string, string][] = [["BOX MOD", "boxMod", "ViewList"], ["MOD MÉCA", "mechMod", "ViewList"], 
    ["MOD ÉLECTRO", "electroMod", "ViewList"], ["PIÈCE MOD", "modPiece", "ViewList"], ["ACCUS - CHARGEUR", "accumulator", "ViewList"]];

    //if ATOMISEURS
    atomizerCategory: [string, string, string][] = [["RECONSTRUCTIBLE", "rebuildable", "ViewList"], 
    ["PIÈCE D'ATOMISEURS", "atomizerPiece", "ViewList"], ["FILS RÉSISTIFS", "wire", "ViewList"], ["OUTILLAGE", "tools", "ViewList"], 
    ["FIBRES ET COTONS", "coton", "ViewList"]];


    

    //diy category
    diyCategory: [string, string, string][] = [["NOS ARÔMES ET BASES", "aromaBase", "Category"], ["MARQUES D'ARÔME", "aromaBrands", "ViewList"]];

    //if NOS ARÔMES ET BASES
    aromaBaseCategory: [string, string, string][] = [["BASE", "base", "ViewList"], ["BOOSTER", "booster", "ViewList"],
    ["ACCESSOIRE", "diyAccessories", "ViewList"], ["ADDITIF", "additive", "ViewList"], ["ARÔME", "aromaType", "Category"], 
    ["READY TO DIY", "readyToDiy", "ViewList"], ["BON PLAN DIY", "diyGoodPlans", "ViewList"], ["TOP 10", "top10Diy", "ViewList"],
    ["COUP DE COEUR", "favoriteDiy", "ViewList"]];

    //if ARÔME in ARÔMES ET BASES
    aromaTypeCategory: [string, string, string][] = [["TOUS NOS ARÔMES", "allAroma", "ViewList"], ["CLASSIC", "classicAroma", "ViewList"],
    ["MENTHE", "mentholAroma", "ViewList"], ["FRUITÉ", "fruitAroma", "ViewList"], ["GOURMAND", "greedyAroma", "ViewList"],
    ["BOISSON", "drinkAroma", "ViewList"]];




    //bons plans category
    goodPlansCategory: [string, string, string][] = [["MEILLEURES VENTES", "bestSale", "ViewList"], ["PROMOTIONS", "promotion", "ViewList"],
    ["BONS PLANS EXPERTS", "expertGoodPlans", "ViewList"], ["BONS PLANS DIY", "diyGoodPlans", "ViewList"], 
    ["VENTES FLASH", "flashSale", "ViewList"]];
}
