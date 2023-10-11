import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { environment } from './environment/environment';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
