import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  back: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    goBack(): void {
    }

    onSettings(): void {
        alert("coucou")
    }

    onRotate(args) {
      let image = <Image>args.object;
      image.animate({
          rotate: 360, 
          duration: 750
      }).then(() => image.rotate = 0);
  }
}
