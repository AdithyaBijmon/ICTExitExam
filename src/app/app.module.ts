import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
