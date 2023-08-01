import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-update',
  templateUrl: './technician-update.component.html',
  styleUrls: ['./technician-update.component.css']
})
export class TechnicianUpdateComponent {
  technician: Technician = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, Validators.minLength(3))

  constructor(
    private service: TechnicianService,
    private toast: ToastrService,
    private router: Router,
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

  update(): void {
    this.service.update(this.technician).subscribe(() => {
      this.toast.success('Successfully updated Technician ', 'Update');
      this.router.navigate(['technician'])
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
    return this.name.valid && this.cpf.valid
      && this.email.valid && this.password.valid;
  }

}
