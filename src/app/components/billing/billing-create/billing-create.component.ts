import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Billing } from 'src/app/models/billing';
import { BillingService } from 'src/app/services/billing.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-billing-create',
  templateUrl: './billing-create.component.html',
  styleUrls: ['./billing-create.component.css']
})
export class BillingCreateComponent {
selected: Date | null;
  billing: Billing = {
    id: '',
    totalValue: 0,
    idTechnician: 0,
    idCustomer: 0,
    initialDateBilling: new Date().toISOString().split("T")[0],
    finalDateBilling: new Date().toISOString().split("T")[0]

  }


  Customer: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  Technician: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  initialDateBilling: FormControl = new FormControl(null, Validators.required);
  finalDateBilling: FormControl = new FormControl(null, Validators.required);

  CustomerOptions: any[] = [];
  TechnicianOptions: any[] = [];

  constructor(
    private service: BillingService,
    private toast: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    private technicianService: TechnicianService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.customerService.findAll().subscribe((customers: any[]) => {
      this.CustomerOptions = customers.map(customer => ({ id: customer.id, name: customer.name }))
    });
    this.technicianService.findAll().subscribe((technician: any[]) => {
      this.TechnicianOptions = technician.map(technician => ({ id: technician.id, name: technician.name }))
    })
  }
  create(): void {

    this.billing.initialDateBilling = this.datePipe.transform(
      this.billing.initialDateBilling, 'dd/MM/yyyy'
    );
    this.billing.finalDateBilling = this.datePipe.transform(
      this.billing.finalDateBilling, 'dd/MM/yyyy'
    );


    console.log('Objeto this.serviceCall antes da solicitação:', this.billing);

    this.service.create(this.billing).subscribe(() => {
      this.toast.success('Successfully Created serviceCall ', 'Created');
      this.router.navigate(['billings'])
    }, (errorResponse: any) => {
      if (errorResponse && errorResponse.error && errorResponse.error.errors) {
        console.error('Erro de validação:', errorResponse.error.errors);
        errorResponse.error.errors.forEach((element: any) => {
          this.toast.error(element.message);
        });
      } else {
        console.error('Erro inesperado:', errorResponse);
        this.toast.error('An unexpected error occurred.');
      }

    });
  }
  validaCampos(): boolean {
    return this.Customer.valid&& this.Technician.valid && this.initialDateBilling.valid
    && this.finalDateBilling.valid;
  }
}
