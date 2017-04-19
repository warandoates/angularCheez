import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetAllCheeseBtnComponent } from './get-all-cheese-btn/get-all-cheese-btn.component';
import { SearchCheeseNameComponent } from './search-cheese-name/search-cheese-name.component';
import { AllCheeseService } from './get-all-cheese-btn/getCheesesService';

import { ResultTableComponent } from './result-table/result-table.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllCheeseBtnComponent,
    SearchCheeseNameComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AllCheeseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
