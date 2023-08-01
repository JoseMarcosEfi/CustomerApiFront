import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-view',
  templateUrl: './technician-view.component.html',
  styleUrls: ['./technician-view.component.css']
})
export class TechnicianViewComponent {
  technician: Technician = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: ''
  }
  constructor(
    private service: TechnicianService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.technician.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.technician.id).subscribe(resposta => {
      this.technician = resposta;
    })
  }

}
