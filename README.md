# NativeScript Segment

Use [Segment](https://segment.com/) with NativeScript

## Prerequisites / Requirements

Create a Segment account : [https://app.segment.com/signup?](https://app.segment.com/signup?), add source Android & iOS and get an API Key

## Installation

Install the plugin :

```javascript
tns plugin add nativescript-segment
```

### iOS

In your `main.ts`, add (or modify) the AppDelegate : 

```javascript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { ios } from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/ui/page/page";
import { Segment } from "nativescript-segment";

if(isIOS){
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];
    
        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
            console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)
            Segment.init(<YOUR_API_KEY>);
            return true;
        }
    
        applicationDidBecomeActive(application: UIApplication): void {
            console.log("applicationDidBecomeActive: " + application)
        }
    }
    ios.delegate = MyDelegate;
}

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

### Android
In your AppComponent, init the Segment plugin : 

```javascript
import { Component } from "@angular/core";
import { Segment } from 'nativescript-segment';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor(){
        Segment.init(<YOUR_API_KEY>);
    }    

}
```
    
## License

Apache License Version 2.0, January 2004
