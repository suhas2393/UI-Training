import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { GetInfoComponent } from './components/get-info/get-info.component';
import { AboutYouComponent } from './components/get-info/sub-component/about-you/about-you.component';
import { AboutCompanyComponent } from './components/get-info/sub-component/about-company/about-company.component';
import { ApplicationComponent } from './components/get-info/sub-component/application/application.component';
import { AccountReviewComponent } from './components/get-info/sub-component/account-review/account-review.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';  
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetInfoComponent,
    AboutYouComponent,
    AboutCompanyComponent,
    ApplicationComponent,
    AccountReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"extreme-login","appId":"1:535538801142:web:f0aed4a26c886c562e0fd7","storageBucket":"extreme-login.appspot.com","apiKey":"AIzaSyAZtQl7JHDCkIVi0_NDtgJQgVaWN3WhRQM","authDomain":"extreme-login.firebaseapp.com","messagingSenderId":"535538801142"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    {provide:FIREBASE_OPTIONS,useValue:environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
