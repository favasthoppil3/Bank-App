import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: "", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "register", component: RegisterComponent },
  { path: "credit", component: CreditComponent },
  { path: 'transactionpage', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
