import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient, private router: Router) {}
  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
  getClienteMap(): Observable<Cliente[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Cliente[]));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, {
      headers: this.httpHeaders,
    }).pipe(
      map((response:any)=>response.Cliente as Cliente),
      catchError(e=>{
        console.error(e.Error.mensaje);
        Swal.fire(
          'Nuevo cliente',
          e.Error.mensaje,
          'error'
        );
        return throwError(e);

      })
    );
  }





  getCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e:any) => {
        this.router.navigate(['/clientes']);
        console.error(e.Error.mensaje);

        Swal.fire(
          'Error al editar',
          e.Error.mensaje,
          'error'
        );

        return throwError(e);
      })
    );
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(
      `${this.urlEndPoint}/${cliente.id}`,
      cliente,
      { headers: this.httpHeaders }
    ).pipe(
      catchError(e=>{
        console.error(e.Error.mensaje);

        Swal.fire(
          'Error al editar',
          e.Error.mensaje,
          'error'
        );
        return throwError(e);

      })
    );
  }
  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    }).pipe(
      catchError(e=>{
        console.error(e.Error.mensaje);
        Swal.fire(
          'Error al eliminr cliente',
          e.Error.mensaje,
          'error'
        );
        return throwError(e);

      })
    );
  }
}
