import { Component, OnInit } from "@angular/core";
import { Image } from 'tns-core-modules/ui/image';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    back: boolean = false;

    slides: string[] = ["home1", "home2", "home3", "home4"];
    currentSlide: string;
    currentSlideNumber: number;

    constructor() { }

    ngOnInit(): void {
        this.currentSlide = this.slides[0];
        this.currentSlideNumber = 0;
        this.slideImages();
    }

    goBack(): void {
    }

    onSettings(): void {
        alert("coucou")
    }

    onRotate(args) {
        let image = <Image>args.object;
        image.animate({
            rotate: 360, 
            duration: 750
        }).then(() => image.rotate = 0);
    }

    slideImages(){
        setInterval(() => {
            if(this.currentSlideNumber === (this.slides.length - 1)){
                this.currentSlide = this.slides[0];
                this.currentSlideNumber = 0;
            }
            else {
                this.currentSlide = this.slides[this.currentSlideNumber + 1];
                this.currentSlideNumber++;
            }
        }, 5000)
    }
}
