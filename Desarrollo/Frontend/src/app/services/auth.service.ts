import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const APIURL = 'http://localhost:8000/api/auth';
const APIProf = 'http://localhost:8000/api/profesores';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {}

  // Inicio de sesión
  login(body: any): Observable<any> {
    return this._http.post(`${APIURL}/login`, body).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token); 
        }
      })
    );
  }

  //Registr
  register(body: any): Observable<any> {
    return this._http.post(`${APIURL}/register`, body);
  }

  //Obtener profesores
  getProfesores(): Observable<any> {
    return this._http.get(`${APIProf}`);
  }

  //Verificar autenticación
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  //Obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  //Cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }
}
