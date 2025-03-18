import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  profesores: any[] = [];

  constructor(private profeS: ProfesorService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerProfesores();
  }

  obtenerProfesores(): void {
    this.profeS.getProfesores().subscribe((data: any) => {
      this.profesores = data;
    });
  }

  editarProfesor(id: number): void {
    this.router.navigate(['/editar-form', id]);
  }
}
