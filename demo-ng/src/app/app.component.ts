import { Component } from "@angular/core";
import { Segment } from 'nativescript-segment';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor(){

    }

    init(){
        Segment.init("3c1qI1Kp8S0C7ryPRS3c56nTlF9cbM6k");
    }

    event1(){
        Segment.track();
    }

    

}
