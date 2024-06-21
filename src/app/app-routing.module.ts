import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ViewScheduleComponent } from './components/scheduler/view-schedule/view-schedule.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'criar-conta',
    component: CreateAccountComponent
  },
  {
    path: 'visualizar-agendamentos',
    component: ViewScheduleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
