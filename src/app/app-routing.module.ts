import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleContactosComponent } from './detalle-contactos/detalle-contactos.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

const routes: Routes = [{ path: "Contactos", component: ListaContactosComponent },
{ path: "DetalleContactos/:id", component: DetalleContactosComponent },
{path: "formulario", component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
