import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceCall } from 'src/app/models/serviceCall';
import { CustomerService } from 'src/app/services/customer.service';
import { ServiceCallService } from 'src/app/services/serviceCall.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-service-call-delete',
  templateUrl: './service-call-delete.component.html',
  styleUrls: ['./service-call-delete.component.css']
})
export class ServiceCallDeleteComponent {
  selected: Date | null;
  serviceCall: ServiceCall = {
    id: '',
    idCustomer: '',
    idTechnician: '',
    priority: 0,
    status: 0,
    observations: ' ',
    title: ' ',
    value: 0,
    closingDate: new Date().toISOString().split("T")[0],
    openingDate: new Date().toISOString().split("T")[0],
    nameCustomer: '',
    nameTechnician: ''
  }

  CustomerOptions: any[] = [];
  TechnicianOptions: any[] = [];

  constructor(
    private service: ServiceCallService,
    private toast: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    private technicianService: TechnicianService,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.serviceCall.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.customerService.findAll().subscribe((customers: any[]) => {
      this.CustomerOptions = customers.map(customer => ({ id: customer.id, name: customer.name }))
    });
    this.technicianService.findAll().subscribe((technician: any[]) => {
      this.TechnicianOptions = technician.map(technician => ({ id: technician.id, name: technician.name }))
    })
  }
  findById(): void {
    this.service.findById(this.serviceCall.id).subscribe(resp => {
      this.serviceCall = resp;
    })
  }
  delete(): void {
    this.service.delete(this.serviceCall.id).subscribe(() => {
      this.toast.success('Successfully deleted ServiceCall ', 'Delete');
      this.router.navigate(['serviceCall'])
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
