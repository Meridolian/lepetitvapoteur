import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  text: string;

  @Input()
  width: string;

  @Input()
  fontSize: string;

  constructor() { }

  ngOnInit(): void {
  }

}
