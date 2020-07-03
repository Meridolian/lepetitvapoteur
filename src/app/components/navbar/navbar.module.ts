import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NavbarRoutingModule
    ],
    declarations: [
        NavbarComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NavbarModule { }
