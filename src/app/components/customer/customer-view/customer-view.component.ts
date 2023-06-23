import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
customer: Customer = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: ''
  }
  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void{
    this.customer.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  
  findById(): void{
    this.service.findById(this.customer.id).subscribe(resposta => {
      //resposta.perfis = []
      this.customer = resposta;
    })
  }

}
