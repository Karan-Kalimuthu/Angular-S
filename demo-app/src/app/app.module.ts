import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { FormsModule } from '@angular/forms';
import { OrangeComponent } from './orange/orange.component';
import { HomeComponent } from './home/home.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    OrangeComponent,
    HomeComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
