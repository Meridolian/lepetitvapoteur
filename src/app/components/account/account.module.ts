import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FrequentPurchaseComponent } from './frequent-purchase/frequent-purchase.component';
import { OrdersComponent } from './orders/orders.component';
import { SavComponent } from './sav/sav.component';
import { SettingsComponent } from './settings/settings.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { AddressModule } from '../address/address.module';
import { ReusableModule } from '../reusable/reusable.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		AccountRoutingModule,
		ReusableModule,
		AddressModule,
		AuthModule
	],
	declarations: [
		AccountComponent,
		ProfileComponent,
		FavoritesComponent,
		FrequentPurchaseComponent,
		OrdersComponent,
		SavComponent,
		SettingsComponent,
		BenefitsComponent,
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AccountModule { }
