import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./auth.service";
import {HttpModule} from "@angular/http";
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FlashMessagesModule,
        FlashMessagesModule.forRoot(),
        HttpModule,
        QuillModule.forRoot()
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
