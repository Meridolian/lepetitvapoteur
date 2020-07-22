import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input()
  welcome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
