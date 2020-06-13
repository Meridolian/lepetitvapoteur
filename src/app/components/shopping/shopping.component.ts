import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  back: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
  }

  onSettings(): void {
    alert("coucou")
  }

}
