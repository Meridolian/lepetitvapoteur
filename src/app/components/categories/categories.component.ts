import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  routes: string[] = ["cat1", "cat2", "cat3", "listView"];
  currentRoute: string;

  constructor() { }

  ngOnInit(): void {
    this.currentRoute = this.routes[0];
  }

  goBack(){
  }

}
