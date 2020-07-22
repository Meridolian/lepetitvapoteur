import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
