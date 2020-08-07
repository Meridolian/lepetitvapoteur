import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EventData, View } from 'tns-core-modules/ui/page';
import { LayoutBase } from 'tns-core-modules/ui/layouts/layout-base';

@Component({
	selector: 'ns-custom-switch',
	templateUrl: './custom-switch.component.html',
	styleUrls: ['./custom-switch.component.scss']
})
export class CustomSwitchComponent implements OnInit {

	togglerColor: string;

	backgroundColor: string;

	@Input()
	checked: boolean;

	@Output() checkedEmitter = new EventEmitter;

	constructor() { }

	ngOnInit(): void {
		this.togglerColor = "#808185";

		this.backgroundColor = "rgba(128, 129, 133, 0.25)";
	}

	initSwitch(args: EventData) {
		setTimeout(() => {
			if (this.checked) {
				let switchView = <LayoutBase>args.object;

				let toggler = <View>switchView.page.getViewById('toggler');
				let position1 = <View>switchView.page.getViewById('position1');

				let location1 = position1.getLocationRelativeTo(switchView);

				toggler.animate({
					translate: { x: location1.x, y: 0 },
					duration: 150
				})

				this.backgroundColor = "rgba(242, 130, 49, 0.2)";
				this.togglerColor = "#f28231";
			}
		}, 1);
	}

	onSwitch(args: EventData) {
		let switchView = <LayoutBase>args.object;

		let toggler = <View>switchView.page.getViewById('toggler');
		let position0 = <View>switchView.page.getViewById('position0');
		let position1 = <View>switchView.page.getViewById('position1');

		let location0 = position0.getLocationRelativeTo(switchView);
		let location1 = position1.getLocationRelativeTo(switchView);


		this.checked = !this.checked;


		if (!this.checked) {
			toggler.animate({
				translate: { x: location0.x, y: 0 },
				duration: 150
			})

			this.backgroundColor = "rgba(128, 129, 133, 0.25)";
			this.togglerColor = "#808185";
		}
		else if (this.checked) {
			toggler.animate({
				translate: { x: location1.x, y: 0 },
				duration: 150
			})

			this.backgroundColor = "rgba(242, 130, 49, 0.2)";
			this.togglerColor = "#f28231";
		}

		this.checkedEmitter.emit(null);
	}
}
