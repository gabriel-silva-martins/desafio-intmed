import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { CreateScheduleComponent } from './components/scheduler/create-schedule/create-schedule.component';
import { ViewScheduleComponent } from './components/scheduler/view-schedule/view-schedule.component';
import { ButtonDefaultComponent } from './components/utils/button-default/button-default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    CreateScheduleComponent,
    ViewScheduleComponent,
    ButtonDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
