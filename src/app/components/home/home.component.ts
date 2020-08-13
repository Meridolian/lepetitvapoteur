import { Component, OnInit } from "@angular/core";
import { Image } from 'tns-core-modules/ui/image';
import { Carousel } from "nativescript-carousel";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    back: boolean = false;

    slides: string[] = ["home1", "home2", "home3", "home4"];

    currentSlide: number;

    constructor() { }

    ngOnInit(): void {
        this.currentSlide = 0;

        setInterval(() => {
            if(this.currentSlide === (this.slides.length - 1)){
                this.currentSlide = 0;
            }
            else {
                this.currentSlide++;
            }
        }, 5000);
    }

    goBack(): void {
    }

    onRotate(args) {
        let image = <Image>args.object;
        image.animate({
            rotate: 360,
            duration: 750
        }).then(() => image.rotate = 0);
    }
}
