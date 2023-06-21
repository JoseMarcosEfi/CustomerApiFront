import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {
    path: '',  component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'tecnicos', component: TecnicoListComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/create', component: CustomerCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
