import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input()
  welcomeLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
