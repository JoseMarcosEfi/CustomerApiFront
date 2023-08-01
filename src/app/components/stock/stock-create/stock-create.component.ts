import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent {
  stock: Stock = {
    id: '',
    description: '',
    amount: null,
    valueBuy: null,
    type: null
  }
  currencyCode: string = 'BRL';
  currencyDisplay: string = 'simbol'

  description: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required])
  amount: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)])
  valueBuy: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100000)])
  type: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(2)])

  constructor(
    private service: StockService,
    private toast: ToastrService,
    private router: Router,
  ) { }
  ngOnInit() {

  }


  create(): void {
    this.service.create(this.stock).subscribe(() => {
      this.toast.success('Successfully registered stock ', 'Register');
      this.router.navigate(['stock'])
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
  /*
  addPerfil(perfil : any): boolean{

    if(this.customer.perfis.includes(perfil)){
    this.customer.perfis.splice(this.customer.perfis.indexOf(perfil), 1);
    }else{
    this.customer.perfis.push(perfil);

    }
  }*/




  validaCampos(): boolean {
    return this.description.valid && this.amount.valid
      && this.valueBuy.valid && this.type.valid;
  }

}


