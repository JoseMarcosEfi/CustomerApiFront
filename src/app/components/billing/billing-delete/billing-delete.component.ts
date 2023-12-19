import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Billing } from 'src/app/models/billing';
import { BillingService } from 'src/app/services/billing.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-billing-delete',
  templateUrl: './billing-delete.component.html',
  styleUrls: ['./billing-delete.component.css']
})
export class BillingDeleteComponent {
  selected: Date | null;
  billing: Billing = {
    id: '',
    totalValue: 0,
    idTechnician: 0,
    idCustomer: 0,
    initialDateBilling: new Date().toISOString().split("T")[0],
    finalDateBilling: new Date().toISOString().split("T")[0]
  }

  CustomerOptions: any[] = [];
  TechnicianOptions: any[] = [];

  constructor(
    private service: BillingService,
    private toast: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    private technicianService: TechnicianService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.billing.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.customerService.findAll().subscribe((customers: any[]) => {
      this.CustomerOptions = customers.map(customer => ({ id: customer.id, name: customer.name }))
    });
    this.technicianService.findAll().subscribe((technician: any[]) => {
      this.TechnicianOptions = technician.map(technician => ({ id: technician.id, name: technician.name }))
    })
  }
  findById(): void {
    this.service.findById(this.billing.id).subscribe(resp => {
      this.billing = resp;
    })
  }
  delete(): void {
    this.service.delete(this.billing.id).subscribe(() => {
      this.toast.success('Successfully deleted Billing ', 'Delete');
      this.router.navigate(['billings'])
    }, ex => {
      if (ex.console.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }
}
