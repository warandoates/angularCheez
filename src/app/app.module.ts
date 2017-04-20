import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetAllCheeseBtnComponent } from './get-all-cheese-btn/get-all-cheese-btn.component';
import { SearchCheeseNameComponent } from './search-cheese-name/search-cheese-name.component';
import { AllCheeseService } from './get-all-cheese-btn/getCheesesService';
import { ResultTableComponent } from './result-table/result-table.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'results', component: ResultTableComponent},
  { path: 'sign-up', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllCheeseBtnComponent,
    SearchCheeseNameComponent,
    ResultTableComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AllCheeseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
