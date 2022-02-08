import { Component } from "@angular/core";
@Component({
    selector: 'lc-getStarted',
    templateUrl:'getStarted.component.html',
    styleUrls: ['getStarted.component.css']
})
export class getStartedComponent{
    imgD: string;
    imgH: string;
    imgG: string;

    constructor() {
        this.imgD = "https://assets.leetcode.com/explore/cards/dynamic-programming/img.png";
        this.imgH = "https://assets.leetcode.com/explore/cards/heap/img.png";
        this.imgG = "https://assets.leetcode.com/explore/cards/graph/img.png";
    }


}