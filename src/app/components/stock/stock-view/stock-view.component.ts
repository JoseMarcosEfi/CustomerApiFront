import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css']
})
export class StockViewComponent {
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
  ) { }

  ngOnInit(): void {
    this.stock.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.stock.id).subscribe(resposta => {
      //resposta.perfis = []
      this.stock = resposta;
    })
  }
}
