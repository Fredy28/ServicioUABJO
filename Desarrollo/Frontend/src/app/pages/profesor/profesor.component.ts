import { Component } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent {
  detalle: any = {};

  constructor(
    private actRoute: ActivatedRoute,
    private profeS: ProfesorService
  ) { 
    this.actRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.profeS.getProfesorById(params.id).subscribe((doc: any) => {
        console.log(doc);
        this.detalle = doc
      });
    });
  }
}
