import { Routes } from '@angular/router';
import { Punto3Component } from './components/ejercicios/punto3/punto3.component';
import { Punto2Component } from './components/ejercicios/punto2/punto2.component';
import { Punto1Component } from './components/ejercicios/punto1/punto1.component';
import { VentaPasajesComponent } from './components/ejercicios/venta-pasajes/venta-pasajes.component';
import { HomeComponent } from './components/public/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta inicial
  { path: "Venta-Pasajes", component: VentaPasajesComponent },
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3', component: Punto3Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, //si no existe la ruta. 

];
