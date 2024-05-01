import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ErrorComponent } from './error/error.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponentComponent, ErrorComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoute), RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
