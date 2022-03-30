//import { getHtmlTagDefinition } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import{ HomeComponent } from './Componentes/Pages/home/home.component';
import { ItemComponent } from './Componentes/Pages/item/item.component';
import { AboutComponent } from './Componentes/Pages/about/about.component';
import { BusquedaComponent } from './Componentes/Pages/busqueda/busqueda.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'about', component: AboutComponent},
  {path: 'buscar/:textBusq', component: BusquedaComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
