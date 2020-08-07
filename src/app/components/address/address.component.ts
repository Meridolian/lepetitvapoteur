import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '~/app/models/user.model';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { UserService } from '~/app/services/user.service';

@Component({
	selector: 'ns-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

	@Input()
	addresses: Array<Address>;

	borderColors: Array<string>;
	nameColors: Array<string>;

	blue: string = "#2cc1b2";
	orange: string = "#f28231";
	grey: string = "#808185";

	@Output() editAddress = new EventEmitter();

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.initFields(true);
	}

	initFields(firstInit: boolean) {
		if(firstInit) {
			this.borderColors = [];
			this.nameColors = [];
		}

		for(let i = 0; i < this.addresses.length; i++) {
			let currentAddress = this.addresses[i];

			if (currentAddress.default) {
				if(firstInit) {
					this.borderColors.push(this.blue);
					this.nameColors.push(this.orange);
				}
				else {
					this.borderColors[i] = this.blue;
					this.nameColors[i] = this.orange;
				}
			}
			else {
				if(firstInit) {
					this.borderColors.push(this.grey);
					this.nameColors.push(this.grey);
				}
				else {
					this.borderColors[i] = this.grey;
					this.nameColors[i] = this.grey;
				}
			}
		}
	}


	onEditAddress(index: number) {
		this.editAddress.emit(index);
	}

	onDefault(index: number) {
		dialogs.confirm({
			title: "ADRESSE PAR DÉFAUT",
			message: "Voulez-vous définir cette adresse comme adresse par défaut ?",
			okButtonText: "OUI",
			cancelButtonText: "NON",
			neutralButtonText: "ANNULER"
		}).then(result => {
			if(result) {
				this.addresses[index].default = true;
				this.userService.updateAddress(this.addresses[index], true);
				this.initFields(false);
			}
		});
	}

}
