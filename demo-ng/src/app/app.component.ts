import { Component } from "@angular/core";
import { Segment } from 'nativescript-segment';
import {Keys} from '../Keys';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor(){

    }

    init(){
        Segment.init(Keys.apiKeyAndroid);
    }

    event1(){
        Segment.track();
    }

    

}
