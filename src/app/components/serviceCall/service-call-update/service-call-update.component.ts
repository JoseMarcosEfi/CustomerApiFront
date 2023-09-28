import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceCall } from 'src/app/models/serviceCall';
import { CustomerService } from 'src/app/services/customer.service';
import { ServiceCallService } from 'src/app/services/serviceCall.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-service-call-update',
  templateUrl: './service-call-update.component.html',
  styleUrls: ['./service-call-update.component.css']
})
export class ServiceCallUpdateComponent {
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
    closingDate: new Date().toISOString().split("T")[0]

  }


  observations: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  title: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  Customer: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  Technician: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  value: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)]);
  priority: FormControl = new FormControl(null, Validators.required);
  status: FormControl = new FormControl(null, Validators.required);
  closingDate: FormControl = new FormControl(null);

  priorityOptions = [
    { value: 0, viewValue: 'LOW' },
    { value: 1, viewValue: 'MEDIUM' },
    { value: 2, viewValue: 'HIGH' }
  ];
  statusOptions = [
    { value: 0, viewValue: 'OPEN' },
    { value: 1, viewValue: 'PROCESSING' },
    { value: 2, viewValue: 'CLOSED' }
  ]
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
      this.priority.setValue(this.serviceCall.priority);
      this.status.setValue(this.serviceCall.status);
    })
  }
  update(): void {

    this.serviceCall.closingDate = this.datePipe.transform(
      this.serviceCall.closingDate, 'dd/MM/yyyy'
    );

    console.log('Objeto this.serviceCall antes da solicitação:', this.serviceCall);

    this.service.update(this.serviceCall).subscribe(() => {
      this.toast.success('Successfully Updated serviceCall ', 'Updated');
      this.router.navigate(['serviceCall'])
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
    return this.observations.valid && this.value.valid
      && this.status.valid && this.priority.valid && this.Customer.valid
      && this.Technician.valid
  }

}
