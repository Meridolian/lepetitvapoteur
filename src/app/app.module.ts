import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { CustomSpinnerModule } from "./components/custom-spinner/custom-spinner.module";
import { AuthModule } from "./modules/auth/auth.module";
import { TitleHeadComponent } from './components/title-head/title-head.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        CustomSpinnerModule,
        AuthModule
    ],
    declarations: [
        AppComponent,
        TitleHeadComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
