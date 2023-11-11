import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Billing } from 'src/app/models/billing';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent {
  ELEMENT_DATA: Billing[] = []

  displayedColumns: string[] = ['totalValue', 'initialDateBilling', 'finalDateBilling', 'nameCustomer', 'nameTechnician'];
  dataSource = new MatTableDataSource<Billing>(this.ELEMENT_DATA);



  constructor(
    private service: BillingService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Billing>(resposta);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
