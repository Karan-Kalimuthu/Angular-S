import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { FormsModule } from '@angular/forms';
import { OrangeComponent } from './orange/orange.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    OrangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
