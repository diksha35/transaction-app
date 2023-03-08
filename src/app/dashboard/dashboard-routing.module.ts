import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { HomeComponent } from './home/home.component';
import { TranshistoryComponent } from './transhistory/transhistory.component';

const routes: Routes = [
  {path : '',redirectTo : '/home', pathMatch:'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'debit' , component : DebitComponent},
  {path : 'credit' , component : CreditComponent},
  {path : 'receipt' , component : TranshistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
