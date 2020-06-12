import { Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { CategoryUtil } from '~/app/utils/category.util';

@Component({
  selector: 'ns-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @ViewChild('category', { static: false }) button: ElementRef;

  categoryRoute: [string, string, string][][];
  currentCategory: [string, string, string][];

  constructor(private categoryUtil: CategoryUtil) { }

  ngOnInit(): void {
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
    if(tempCategory[2] === "Category"){
      this.categoryRoute.push(this.currentCategory);
      nextCategory = tempCategory[1] + tempCategory[2];
      this.currentCategory = this.categoryUtil[nextCategory];
    }
  }

  goBack(): void {
    this.currentCategory = this.categoryRoute[this.categoryRoute.length - 1];
    this.categoryRoute.pop();
  }



}
