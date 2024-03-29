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
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockUpdateComponent } from './components/stock/stock-update/stock-update.component';
import { StockDeleteComponent } from './components/stock/stock-delete/stock-delete.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { TechnicianCreateComponent } from './components/technician/technician-create/technician-create.component';
import { TechnicianUpdateComponent } from './components/technician/technician-update/technician-update.component';
import { TechnicianViewComponent } from './components/technician/technician-view/technician-view.component';
import { TechnicianDeleteComponent } from './components/technician/technician-delete/technician-delete.component';
import { ServiceCallListComponent } from './components/serviceCall/service-call-list/service-call-list.component';
import { ServiceCallAddComponent } from './components/serviceCall/service-call-add/service-call-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceCallUpdateComponent } from './components/serviceCall/service-call-update/service-call-update.component';
import { ServiceCallDeleteComponent } from './components/serviceCall/service-call-delete/service-call-delete.component';
import { ServiceCallViewComponent } from './components/serviceCall/service-call-view/service-call-view.component';
import { BillingCreateComponent } from './components/billing/billing-create/billing-create.component';
import { BillingListComponent } from './components/billing/billing-list/billing-list.component';
import { BillingDeleteComponent } from './components/billing/billing-delete/billing-delete.component';


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
      { path: 'stock/view/:id', component: StockViewComponent },
      { path: 'stock/create', component: StockCreateComponent },
      { path: 'stock/update/:id', component: StockUpdateComponent },
      { path: 'stock/delete/:id', component: StockDeleteComponent },
      { path: 'technician', component: TechnicianListComponent },
      { path: 'technician/create', component: TechnicianCreateComponent },
      { path: 'technician/update/:id', component: TechnicianUpdateComponent },
      { path: 'technician/view/:id', component: TechnicianViewComponent },
      { path: 'technician/delete/:id', component: TechnicianDeleteComponent },
      { path: 'serviceCall', component: ServiceCallListComponent },
      { path: 'serviceCall/create', component: ServiceCallAddComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'serviceCall/update/:id', component: ServiceCallUpdateComponent },
      { path: 'serviceCall/delete/:id', component: ServiceCallDeleteComponent },
      { path: 'serviceCall/view/:id', component: ServiceCallViewComponent },
      { path: 'billings', component: BillingListComponent },
      { path: 'billings/create', component: BillingCreateComponent },
      { path: 'billings/delete/:id', component: BillingDeleteComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
