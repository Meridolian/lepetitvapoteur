import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'tns-core-modules/ui/image';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { User } from '~/app/models/user.model';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';

@Component({
	selector: 'ns-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	signup: boolean;
	@Input()
	startingApp: boolean;

	user: User;
	email: string;
	password: string;
	confirmPassword: string;
	civility: string;
	firstName: string;
	lastName: string;
	birthday: Date;
	newsletter: boolean;

	birthdayShort: string;

	constructor(private route: ActivatedRoute, private router: RouterExtensions) { }

	ngOnInit(): void {
		this.signup = true;
		this.startingApp = JSON.parse(this.route.snapshot.paramMap.get("startingApp"));

		this.birthday = new Date;

		this.shortDate(this.birthday);
	}

	initFields(){
		this.user = new User();
		this.email = "";
		this.password = "";
		this.confirmPassword = "";
		this.civility = "";
		this.firstName = "";
		this.lastName = "";
		this.newsletter = false;
	}

	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}

	loginSignup() {
		this.signup = !this.signup;
		this.initFields();
	}

	onCivility(choice) {
		this.civility = choice;
	}

	onBirthday() {
		let picker = new ModalDatetimepicker();
		picker.pickDate({
			maxDate: new Date(),
			minDate: new Date(1900, 1, 1)
		}).then((result) => {
			let date = new Date(result.year, result.month - 1, result.day);
			this.birthday = date;
		}).then(() => {
			this.shortDate(this.birthday);
		});
	}


	onLogin(){

	}

	onSignup(){
		console.log(this.email)
	}


	noLogin() {
		this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
	}

	shortDate(date: Date) {
		let months = ["JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"];
		let day = date.getDate();
		let month = months[date.getMonth()];
		let year = date.getFullYear();
		this.birthdayShort = day + " " + month + " " + year;
	}
}
