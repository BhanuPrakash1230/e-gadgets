import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartwearsComponent } from './smartwears/smartwears.component';
import { AudioComponent } from './audio/audio.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { ProductsmanagementComponent } from './productsmanagement/productsmanagement.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthorizationService } from './authorization.service';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagemobilesComponent } from './managemobiles/managemobiles.component';
import { ManagelaptopsComponent } from './managelaptops/managelaptops.component';
import { ManagesmartwearsComponent } from './managesmartwears/managesmartwears.component';
import { ManageaudioComponent } from './manageaudio/manageaudio.component';
import { TracksalesComponent } from './tracksales/tracksales.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SendotpComponent } from './sendotp/sendotp.component';
import { GenerateotpComponent } from './generateotp/generateotp.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderfooterComponent,
    UserComponent,
    AdminComponent,
    ProductsComponent,
    MobilesComponent,
    LaptopsComponent,
    SmartwearsComponent,
    AudioComponent,
    UsersDataComponent,
    ProductsmanagementComponent,
    UserprofileComponent,
    CartComponent,
    LogoutComponent,
    ManagemobilesComponent,
    ManagelaptopsComponent,
    ManagesmartwearsComponent,
    ManageaudioComponent,
    TracksalesComponent,
    MyordersComponent,
    AdminprofileComponent,
    AboutusComponent,
    SendotpComponent,
    GenerateotpComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
