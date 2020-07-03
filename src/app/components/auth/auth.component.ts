import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signup: boolean;

  constructor() { }

  ngOnInit(): void {
    this.signup = false;
  }

}
