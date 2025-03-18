import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  profesores: any[] = [];
  load = false;

  constructor(private ps: ProfesorService) { }

  ngOnInit() {
    this.getProfesores();
  }

  getProfesores() {
    this.ps.getProfesores().subscribe(
      (resp: any) => {
        console.log(resp);
        this.profesores = resp; 
        this.load = true;
      },
      error => {
        console.error('Error al obtener profesores:', error);
      }
    );
  }

  trackById(index: number, prof: any): number {
    return prof.id; // Devuelve el ID único del profesor
  }
}
