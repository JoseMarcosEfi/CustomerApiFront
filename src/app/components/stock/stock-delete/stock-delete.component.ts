import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.css']
})
export class StockDeleteComponent {
  stock: Stock = {
    id: '',
    description: '',
    amount: 0,
    valueBuy: 0,
    type: 0,
  }
  constructor(
    private service: StockService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.stock.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.stock.id).subscribe(resposta => {
      this.stock = resposta;
    })
  }
  delete(): void {
    this.service.delete(this.stock.id).subscribe(() => {
      this.toast.success('Successfully deleted Stock ', 'Delete');
      this.router.navigate(['stock'])
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
