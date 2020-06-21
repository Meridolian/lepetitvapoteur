import { Component, OnInit, Input } from '@angular/core';
import { Item } from '~/app/models/item.model';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData, Page, View } from 'tns-core-modules/ui/page';
import { ScrollView } from "tns-core-modules/ui/scroll-view";

@Component({
  selector: 'ns-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item;
  colorsOrNicotine: string;
  colorChoosed: string;
  quantity: number;

  constructor() { }

  ngOnInit(): void {
    this.quantity = 1;
    this.colorChoosed = this.item.colors[0];
    if (this.item.colors.length > 0) {
      this.colorsOrNicotine = "colors";
    }
    else {
      this.colorsOrNicotine = "nicotine";
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
      this.colorChoosed = result;
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
  }

  onAddToCart() {

  }

}
