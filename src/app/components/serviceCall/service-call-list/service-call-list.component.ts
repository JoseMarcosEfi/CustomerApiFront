 import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceCall } from 'src/app/models/serviceCall';
import { ServiceCallService } from 'src/app/services/serviceCall.service';

@Component({
  selector: 'app-service-call-list',
  templateUrl: './service-call-list.component.html',
  styleUrls: ['./service-call-list.component.css']
})
export class ServiceCallListComponent {
  ELEMENT_DATA: ServiceCall[] = []

  displayedColumns: string[] = ['title', 'nameTechnician', 'nameCustomer', 'observations', 'value', 'priority', 'status', 'openingDate', 'action'];
  dataSource = new MatTableDataSource<ServiceCall>(this.ELEMENT_DATA);

  constructor(
    private service: ServiceCallService
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
      this.dataSource = new MatTableDataSource<ServiceCall>(resposta);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
