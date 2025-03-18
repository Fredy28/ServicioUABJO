import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {

  agregar!: FormGroup;
  private fb = inject(FormBuilder);
  private profesorService = inject(ProfesorService);
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.agregar = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      ocupacion: ['', [Validators.required, Validators.maxLength(255)]],
      descripcion: [''],
      imagen: [''],
      drive: ['']
    });
  }

  agregarProfesor() {
    if (this.agregar.valid) {
      this.profesorService.addProfesor(this.agregar.value).subscribe(() => {
        alert('Profesor agregado correctamente');
        this.router.navigate(['/editar']); // Redirigir a la lista de profesores
      });
    } else {
      alert('Por favor, complete los campos solicitados.');
    }
  }
}
