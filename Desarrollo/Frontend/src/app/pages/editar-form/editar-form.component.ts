import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './editar-form.component.html',
  styleUrl: './editar-form.component.css'
})
export class EditarFormComponent implements OnInit {
  profesor: any = {};

  constructor(
    private route: ActivatedRoute,
    private profeS: ProfesorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerProfesor();
  }

  obtenerProfesor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profeS.getProfesorById(id).subscribe((data: any) => {
        this.profesor = data;
      });
    }
  }

  guardarCambios(): void {
    this.profeS.updateProfesor(this.profesor.id, this.profesor).subscribe(() => {
      alert('Profesor actualizado con éxito');
      this.router.navigate(['/editar']);
    }, error => {
      console.error('Error al actualizar:', error);
  });
  }

  cancelar(): void {
    this.router.navigate(['/editar']);
  }
}
