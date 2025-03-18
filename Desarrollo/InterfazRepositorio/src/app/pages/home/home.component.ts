import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Profesor } from '../../interfaces/Profesor.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  profes : Profesor[] = [
    {
      id: 1,
      nombre: 'Nombre del docente 1',
      ocupacion: 'Ocupación del docente',
      image: './assets/Profesores/perfil.png'
    },
    {
      id: 2,
      nombre: 'Nombre del docente 2',
      ocupacion: 'Ocupación del docente',
      image: './assets/Profesores/perfil.png'
    },
    {
      id: 3,
      nombre: 'Nombre del docente 3',
      ocupacion: 'Ocupación del docente',
      image: './assets/Profesores/perfil.png'
    },
    {
      id: 4,
      nombre: 'Nombre del docente 4',
      ocupacion: 'Ocupación del docente',
      image: './assets/Profesores/perfil.png'
    },
    {
      id: 5,
      nombre: 'Dr. Saúl Reyes Sanabria',
      ocupacion: 'Doctor en Ciencias Sociales',
      image: './assets/Profesores/DrSaul.png'
    },
    {
      id: 6,
      nombre: 'Dr. Alejandro Arturo Jiménez Martínez',
      ocupacion: 'Doctor en Ciencias en la especialidad de Investigacón Educativa',
      image: './assets/Profesores/DrAlejandro.png'
    },
    {
      id: 7,
      nombre: 'Dra. Guadalupe Aurora Maldonado Berea',
      ocupacion: 'Doctora en Educación',
      image: './assets/Profesores/DraGuadalupe.png'
    },
    {
      id: 8,
      nombre: 'Dr. Juan Carlos Sánchez Antonio',
      ocupacion: 'Doctor en Filosofía Política',
      image: './assets/Profesores/DrJuan.png'
    },
    {
      id: 9,
      nombre: 'Dra. Magaly Hernández Aragón',
      ocupacion: 'Doctora en Investigación e Innovación Educativa',
      image: './assets/Profesores/DraMagaly.png'
    },
    {
      id: 10,
      nombre: 'Dr. Gabriel Angeles Hernández',
      ocupacion: 'Doctor en Educación',
      image: './assets/Profesores/DrGabriel.png'
    }
  ]
}
