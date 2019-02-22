// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import {Keys} from './Keys';

import { ios } from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/ui/page/page";
import { Segment } from "nativescript-segment";

if(isIOS){
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];
    
        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
            console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)
            Segment.init(Keys.apiKeyIOS);
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
