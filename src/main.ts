// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

// FORCE THE LIGHT MODE
import Theme from "@nativescript/theme";
Theme.setMode(Theme.Light); // Or Theme.Light

declare namespace androidx {
    export namespace appcompat {
     export namespace app {
      export const AppCompatDelegate: any;
     }
    }
   }
import { android, on, launchEvent, ApplicationEventData } from '@nativescript/core/application';
if (android) {
 on(launchEvent, (args: ApplicationEventData) => {
  androidx.appcompat.app.AppCompatDelegate.setDefaultNightMode(androidx.appcompat.app.AppCompatDelegate.MODE_NIGHT_NO)
 });
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
