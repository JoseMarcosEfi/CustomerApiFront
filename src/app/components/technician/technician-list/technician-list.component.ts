import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent {
  ELEMENT_DATA: Technician[] = []

  displayedColumns: string[] = ['cpf', 'name', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<Technician>(this.ELEMENT_DATA);

  constructor(
    private service: TechnicianService
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
      this.dataSource = new MatTableDataSource<Technician>(resposta);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
