import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  titulo: string = 'Crear cliente';
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }
  create(): void {
    /*    console.log("Clicked: ");
    console.log(this.cliente); */
    this.clienteService.create(this.cliente).subscribe(json => {
      Swal.fire(
        'Nuevo cliente',
        `Cliente ${json.nombre} creado con éxito !`,
        'success'
      );
      this.router.navigate(['/clientes']);
    });
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe((resp) => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Cliente actualizado',
        `Cliente ${resp.Cliente.nombre} actualizado con éxito !`,
        'success'
      );
    });
  }
}
