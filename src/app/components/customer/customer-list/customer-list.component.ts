import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from 'src/app/models/customer'
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomerService } from 'src/app/services/customer.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],

})
  
export class CustomerListComponent implements AfterViewInit, MatPaginatorIntl{

  ELEMENT_DATA: Customer[] =[]
   
  displayedColumns: string[] = ['cpf', 'name', 'email', 'password', 'action'];
  dataSource= new MatTableDataSource<Customer>(this.ELEMENT_DATA);
  
  constructor(
    private service: CustomerService
  ) { }

  changes: Subject<void>;
  itemsPerPageLabel = $localize`Items per page:`;
  nextPageLabel= 'Next page';
  previousPageLabel= 'Previous page';
  firstPageLabel = $localize`First page`;
  lastPageLabel= $localize`Last page`;

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page + 1} of ${amountPages}`;
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

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
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
}
