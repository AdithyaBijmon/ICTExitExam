import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path:'/',component:HomeComponent},
  {path:'/otp',component:OtpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
