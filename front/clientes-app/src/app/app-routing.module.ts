import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes: Routes = [ {path:'' ,redirectTo:'/clientes',pathMatch:'full'},
{path:'directivas',component:DirectivaComponent},
{path:'clientes',component:ClientesComponent},
/* {path:'form',component:FormComponent}, */
{path:'clientes/form',component:FormComponent},
{path:'clientes/form/:id',component:FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
