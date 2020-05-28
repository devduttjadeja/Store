import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
