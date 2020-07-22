import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.scss']
})
export class SavComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
