import { Component, OnInit, Input } from '@angular/core';
import { Address } from '~/app/models/user.model';

@Component({
	selector: 'ns-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

	@Input()
	address: Address;

	constructor() { }

	ngOnInit(): void {
	}

}
