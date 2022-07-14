import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';



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
	HttpClientModule,  //imported the module
	RouterModule.forRoot([
		{ path: 'about/', component: AboutComponent },
		{ path: 'pricing/', component: PricingComponent },
	]),
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
