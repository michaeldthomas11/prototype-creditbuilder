import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PricingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule.forRoot([
		{ path: 'about/', component: AboutComponent },
		{ path: 'pricing/', component: PricingComponent },
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
