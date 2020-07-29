import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-title-head',
  templateUrl: './title-head.component.html',
  styleUrls: ['./title-head.component.scss']
})
export class TitleHeadComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
