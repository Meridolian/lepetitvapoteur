import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
