import { Component, OnInit } from '@angular/core';
import { CategoryUtil } from '~/app/utils/category.util';
import { ItemService } from '~/app/services/item.service';
import { Item } from '~/app/models/item.model';
import { Categories } from '~/app/models/categories';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryRoute: [string, string, string][][];
  currentCategory: [string, string, string][];
  showListItems: boolean;
  arrayItem: Array<Item>;
  singleItem: Item;
  showSingleItem: boolean;

  constructor(private categoryUtil: CategoryUtil, private itemService: ItemService) { }

  ngOnInit(): void {
    this.showSingleItem = false;
    this.showListItems = false;
    this.currentCategory = this.categoryUtil.firstCategory;
    this.categoryRoute = [];
  }

  reInitCategories(): void {
    this.currentCategory = this.categoryUtil.firstCategory;
    this.categoryRoute = [];
  }

  onCategory(index: number): void {
    let tempCategory = this.currentCategory[index];
    let nextCategory: string;
    if (tempCategory[2] === "Category") {
      this.showListItems = false;
      this.categoryRoute.push(this.currentCategory);
      nextCategory = tempCategory[1] + tempCategory[2];
      this.currentCategory = this.categoryUtil[nextCategory];
    }
    else if (tempCategory[2] === "ViewList") {
      this.categoryRoute.push(this.currentCategory);


      this.arrayItem = this.itemService.getItemByCategory(Categories[tempCategory[1]]);

      this.showListItems = true;
    }
  }

  onSingleItem(id: number) {
    this.singleItem = this.itemService.getItem(id);
    this.showSingleItem = true;
    this.showListItems = false;
  }

  goBack(): void {
    if (this.showSingleItem === true) {
      this.showSingleItem = false;
      this.showListItems = true;
    }
    else {
      this.currentCategory = this.categoryRoute[this.categoryRoute.length - 1];
      this.showListItems = false;
      this.categoryRoute.pop();
    }
  }

  onRotate(args) {
    let image = <Image>args.object;
    image.animate({
      rotate: 360,
      duration: 750
    }).then(() => image.rotate = 0);
  }

}
