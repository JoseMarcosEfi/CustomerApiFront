import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent {
  stock: Stock = {
    id: '',
    description: '',
    amount: null,
    valueBuy: null,
    type: null
  }

  description: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required])
  amount: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)])
  valueBuy: FormControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100000)])
  type: FormControl = new FormControl(null, Validators.required)

  typeOptions = [
    { value: 0, viewValue: 'TOOL' },
    { value: 1, viewValue: 'PART' },
    { value: 2, viewValue: 'OTHER' }
  ]

  constructor(
    private service: StockService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.stock.id = this.route.snapshot.paramMap.get('id');
    this.findById();

  }

  findById(): void {
    this.service.findById(this.stock.id).subscribe(resp => {
      this.stock = resp;
      this.type.setValue(this.stock.type);
    })
  }
  update(): void {
    this.service.update(this.stock).subscribe(() => {
      this.toast.success('Successfully Updated stock ', 'Update');
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
  validaCampos(): boolean {
    return this.description.valid && this.amount.valid
      && this.valueBuy.valid && this.type.valid;
  }


}
