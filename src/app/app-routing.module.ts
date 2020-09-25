import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartwearsComponent } from './smartwears/smartwears.component';
import { AudioComponent } from './audio/audio.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { ProductsmanagementComponent } from './productsmanagement/productsmanagement.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagemobilesComponent } from './managemobiles/managemobiles.component';
import { ManagelaptopsComponent } from './managelaptops/managelaptops.component';
import { ManagesmartwearsComponent } from './managesmartwears/managesmartwears.component';
import { ManageaudioComponent } from './manageaudio/manageaudio.component';
import { TracksalesComponent } from './tracksales/tracksales.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SendotpComponent } from './sendotp/sendotp.component';
import { GenerateotpComponent } from './generateotp/generateotp.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [
  {path:'headerfooter',component:HeaderfooterComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"registration",component:RegistrationComponent},
    {path:"OTPCheck",component:SendotpComponent},
    {path:"generateOTP",component:GenerateotpComponent},
    {path:"changepassword",component:ChangepasswordComponent},
    {path:"products",component:ProductsComponent,children:[
      {path:'mobiles',component:MobilesComponent},
      {path:'laptops',component:LaptopsComponent},
      {path:'smartwears',component:SmartwearsComponent},
      {path:"audio",component:AudioComponent},
      {path:'',redirectTo:'mobiles',pathMatch:'full'},
    ]},
    {path:'aboutus',component:AboutusComponent}
  ]},
  
  {path:'user',component:UserComponent,children:[
    {path:'userprofile',component:UserprofileComponent},
    {path:"products",component:ProductsComponent,children:[
      {path:'mobiles',component:MobilesComponent},
      {path:'laptops',component:LaptopsComponent},
      {path:'smartwears',component:SmartwearsComponent},
      {path:"audio",component:AudioComponent},
      {path:'',redirectTo:'mobiles',pathMatch:'full'},
    ]},
    {path:'cart',component:CartComponent},
    {path:'myorders',component:MyordersComponent},
    {path:'logout',component:LogoutComponent},
    {path:'',redirectTo:'userprofile',pathMatch:'full'}
  ]},

  {path:'admin',component:AdminComponent,children:[
    {path:'adminprofile',component:AdminprofileComponent},
    {path:'usersdata',component:UsersDataComponent},
    {path:'productsmanage',component:ProductsmanagementComponent,children:[
      {path:'managemobiles',component:ManagemobilesComponent},
      {path:'managelaptops',component:ManagelaptopsComponent},
      {path:'managesmartwears',component:ManagesmartwearsComponent},
      {path:'manageaudio',component:ManageaudioComponent}
    ]},
    {path:'',redirectTo:'adminprofile',pathMatch:'full'},
    {path:"tracksales",component:TracksalesComponent}
  ]},
  
  {path:'',redirectTo:'/headerfooter/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
