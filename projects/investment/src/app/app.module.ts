import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestmentModule } from './investment/investment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, InvestmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
