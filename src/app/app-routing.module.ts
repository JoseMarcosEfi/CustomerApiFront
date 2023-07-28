import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { StockViewComponent } from './components/stock/stock-view/stock-view.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/create', component: CustomerCreateComponent },
      { path: 'customer/update/:id', component: CustomerUpdateComponent },
      { path: 'customer/delete/:id', component: CustomerDeleteComponent },
      { path: 'customer/view/:id', component: CustomerViewComponent },
      { path: 'stock', component: StockListComponent },
      { path: 'stock/view/:id', component: StockViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
