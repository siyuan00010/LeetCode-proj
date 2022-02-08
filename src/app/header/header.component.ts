import { Component } from "@angular/core";
@Component({
    selector: 'lc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent{
    img: string;

    constructor() {
        this.img = "https://static.tildacdn.com/tild3234-6137-4038-b336-326164306631/leetcode_logo.png";
    }
}