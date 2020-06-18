import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() picture: string;
  @Input() shortDescription: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() singleItem = new EventEmitter();

  onSingleItem() {
    this.singleItem.emit(null);
  }

}
