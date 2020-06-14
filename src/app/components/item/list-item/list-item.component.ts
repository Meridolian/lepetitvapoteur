import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()name: string;
  @Input()picture: string;
  @Input()shortDescription: string;
  @Input()price: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSingleItem(){
  }

}
