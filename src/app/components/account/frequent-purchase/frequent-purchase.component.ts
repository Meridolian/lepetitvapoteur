import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-frequent-purchase',
  templateUrl: './frequent-purchase.component.html',
  styleUrls: ['./frequent-purchase.component.scss']
})
export class FrequentPurchaseComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
