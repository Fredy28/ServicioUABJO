import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  profesores: any[] = [];

  constructor(private profeS: ProfesorService, private router: Router) {}

  ngOnInit() {
    this.obtenerProfesores();
  }

  obtenerProfesores(): void {
    this.profeS.getProfesores().subscribe((data: any) => {
      this.profesores = data;
    });
  }

  confirmarEliminacion(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este docente?');
    if (confirmacion) {
      this.eliminarProfesor(id);
    }
  }

  eliminarProfesor(id: number) {
    this.profeS.eliminar(id).subscribe(() => {
      alert('Docente eliminado correctamente.');
      this.obtenerProfesores(); // Actualizar la lista
    });
  }
  
    
}
