import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIProf = 'http://localhost:8000/api/profesores';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private _http = inject(HttpClient);

  getProfesores(): Observable<any> {
    return this._http.get(`${APIProf}`);
  }

  getProfesorById(id: string){
    return this._http.get(`${APIProf}/${id}`);
  }

  updateProfesor(id: string, profesor: any){
    return this._http.put(`${APIProf}/${id}`, profesor);
  }

  addProfesor(profesor: any) {
    return this._http.post(`${APIProf}`, profesor);
  }

  getDetalle(id: string){
    return this._http.get(`${APIProf}/${id}/characters`);
  }

  eliminar(id: number) {
    return this._http.delete(`${APIProf}/${id}`);
  }
}
