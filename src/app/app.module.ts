import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { ClearButtonComponent } from './clear-button/clear-button.component';
import { GroupButtonComponent } from './group-button/group-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    LoadButtonComponent,
    ClearButtonComponent,
    GroupButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
