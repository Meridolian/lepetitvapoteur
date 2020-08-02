import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { Image } from "tns-core-modules/ui/image";

@Component({
	selector: 'ns-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	startingApp: boolean;

	showLogin: boolean;
	showSignup: boolean;

	constructor(private route: ActivatedRoute, private router: RouterExtensions) { }

	ngOnInit(): void {
		this.startingApp = JSON.parse(this.route.snapshot.paramMap.get("startingApp"));
		this.showLogin = true;
		this.showSignup = false;
	}

	goToApp() {
		if (this.startingApp) {
			this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
		}
	}

	goToLogin() {
		this.showLogin = true;
		this.showSignup = false;

		// TODO animations
	}

	goToSignup() {
		this.showLogin = false;
		this.showSignup = true;

		// TODO animations
	}

	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}
}
