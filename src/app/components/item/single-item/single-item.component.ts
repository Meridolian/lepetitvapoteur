import { Component, OnInit, Input } from '@angular/core';
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Item } from '~/app/models/item.model';

@Component({
  selector: 'ns-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item;
  pictureId: number;

  constructor() { }

  ngOnInit(): void {
    this.pictureId = 0;
  }

  onSwipeImage(args: SwipeGestureEventData) {
    let view = args.view;
    if (args.direction === 1) {
      if (this.pictureId !== 0) {
        view.animate({
          translate: { x: 500, y: 0 }, duration: 100,
        }).then(() => {
          this.pictureId--;
          view.translateX = -500;
        }).then(() => view.animate({
          translate: { x: 0, y: 0 }, duration: 100,
        }));
      }
    }
    else {
      if (this.pictureId !== (this.item.pictures.length - 1)) {
        view.animate({
          translate: { x: -500, y: 0 }, duration: 100,
        }).then(() => {
          this.pictureId++;
          view.translateX = 500;
        }).then(() => view.animate({
          translate: { x: 0, y: 0 }, duration: 100,
        }));
      }
    }
  }

  onAddToCart() {

  }

}
