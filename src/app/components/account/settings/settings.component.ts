import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
