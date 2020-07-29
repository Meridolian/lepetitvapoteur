import { Component, OnInit, Input } from '@angular/core';
import { Item } from '~/app/models/item.model';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData, Page, View } from 'tns-core-modules/ui/page';
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import { ShoppingCartService } from '~/app/services/shopping-cart.service';


@Component({
  selector: 'ns-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item;
  typeSelect: string;
  quantity: number;
  price: string;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.price = this.item.price.toFixed(2);
    this.quantity = 1;
    
    if (this.item.colors.length > 0) {
      this.item.color = this.item.colors[0];
      this.typeSelect = "color";
    }
    else if(this.item.nicotineRates.length > 0){
      this.item.nicotine = this.item.nicotineRates[0];
      this.typeSelect = "nicotine";
    }
    else if(this.item.capacities.length > 0){
      this.item.capacity = this.item.capacities[0];
      this.typeSelect = "bottleSize";
    }
  }

  onChooseColor(args: EventData) {
    let element = <View>args.object;
    let page = <Page>element.page;
    let scrollViewPictures = <ScrollView>page.getViewById("scrollViewPictures");
    dialogs.action({
      message: "Choisissez une couleur",
      cancelButtonText: "Annuler",
      actions: this.item.colors
    }).then(result => {
      if(result !== "Annuler"){
        this.item.color = result;
        for(let i = 0; i < this.item.pictures.length; i++){
          let currentPicture = this.item.pictures[i];
          if(currentPicture.includes(result.replace(/\s/g, "").toLocaleLowerCase())){
            let tempString = "picture" + i;
            let base = <View>page.getViewById("picture0");
            let target = <View>page.getViewById(tempString);
            scrollViewPictures.scrollToHorizontalOffset(target.getLocationRelativeTo(base).x, true);
            break;
          }
        }
      }
    });
  }

  onChooseNicotine(){
    dialogs.action({
      message: "Choisissez un taux de nicotine",
      cancelButtonText: "Annuler",
      actions: this.item.nicotineRates
    }).then(result => {
      if(result !== "Annuler"){
        this.item.nicotine = result;
      }
    });
  }

  onChooseBottleSize(){
    dialogs.action({
      message: "Choisissez la contenance",
      cancelButtonText: "Annuler",
      actions: this.item.capacities
    }).then(result => {
      if(result !== "Annuler"){
        this.item.capacity = result;
      }
    });
  }

  onQuantity(choice){
    if(choice === "plus"){
      this.quantity++;
    }
    else if(choice === "minus") {
      if((this.quantity - 1) < 1){
        this.quantity = 1;
      }
      else {
        this.quantity--;
      }
    }
    else if(choice === "field"){
      if(this.quantity < 1) {
        this.quantity = 1;
      }
    }
  }

  onAddToCart() {
    this.shoppingCartService.addToCart(this.item, this.quantity);
    //TODO show Item acheté
  }

}
