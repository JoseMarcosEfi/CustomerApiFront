import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';
// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { NgxMaskModule } from 'ngx-mask';
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
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceCallUpdateComponent } from './components/serviceCall/service-call-update/service-call-update.component';
import { ServiceCallDeleteComponent } from './components/serviceCall/service-call-delete/service-call-delete.component';
import { ServiceCallViewComponent } from './components/serviceCall/service-call-view/service-call-view.component';




@NgModule({
  schemas: [NO_ERRORS_SCHEMA], // ADICIONADO PARA REMOVER ERRO INEXISTENTE EM CUSTOMER LIST
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    CustomerViewComponent,
    StockListComponent,
    StockViewComponent,
    StockCreateComponent,
    StockUpdateComponent,
    StockDeleteComponent,
    TechnicianListComponent,
    TechnicianCreateComponent,
    TechnicianUpdateComponent,
    TechnicianViewComponent,
    TechnicianDeleteComponent,
    ServiceCallListComponent,
    ServiceCallAddComponent,
    FooterComponent,
    ServiceCallUpdateComponent,
    ServiceCallDeleteComponent,
    ServiceCallViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    DatePipe,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [DatePipe/*, { provide: LOCALE_ID, useValue: "pt" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
