import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {

  customer: Customer = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, Validators.minLength(3))

  constructor(
    private service: CustomerService,
    private toast: ToastrService,
    private router: Router
  ) { }

  create(): void {
    this.service.create(this.customer).subscribe(() => {
      this.toast.success('Successfully registered customer ', 'Register');
      this.router.navigate(['customer'])
    }, ex => {
      if (ex.console.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }

    });
  }
  validaCampos(): boolean {
    return this.name.valid && this.cpf.valid
      && this.email.valid && this.password.valid;
  }

}
