import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from 'src/app/models/customer'
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';





@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
  
export class CustomerListComponent implements OnInit{
   
  displayedColumns: string[] = ['cpf', 'name', 'email', 'password', 'action'];
  dataSource: MatTableDataSource<Customer>;
  
  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {   
    this.dataSource = new MatTableDataSource<Customer>();
    this.getDataFromApi();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getDataFromApi() {
    this.http.get<Customer[]>('http://localhost:8080/customer').subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deletarCustom(customerId: string) : void{
    this.http.delete('http://localhost:8080/customer').subscribe(() => {
      this.router.navigateByUrl('/customer-list', { skipLocationChange: true }).then(() => {
        this.router.navigate(['customer-list']);
      });
    });
  }
  addCustomer():void{}
   
}
