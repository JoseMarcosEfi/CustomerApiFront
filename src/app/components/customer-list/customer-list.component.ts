import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from 'src/app/models/customer'
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
  
export class CustomerListComponent implements OnInit{

  ELEMENT_DATA: Customer[] =[]
   
  displayedColumns: string[] = ['cpf', 'name', 'email', 'password'];
  dataSource= new MatTableDataSource<Customer>(this.ELEMENT_DATA);
  
  constructor(
    private service: CustomerService
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
      this.dataSource = new MatTableDataSource<Customer>(resposta);
    });
 }
   
}
