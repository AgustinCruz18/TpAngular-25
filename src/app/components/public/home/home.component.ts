import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tarjetas = [
    {
      titulo: 'Punto 1',
      descripcion: 'Revisa la nuevas noticias.',
      ruta: '/punto1',
      imagen: 'assets/img/punto1.png'
    },
    {
      titulo: 'Punto 2',
      descripcion: 'Compra tus mejores productos.',
      ruta: '/punto2',
      imagen: 'assets/img/punto2.png'
    },
    {
      titulo: 'Punto 3',
      descripcion: 'Juega al mejor juego:  Ahoracadito.',
      ruta: '/punto3',
      imagen: 'assets/img/punto3.png'
    },
    {
      titulo: 'Venta de Pasajes',
      descripcion: 'Registra y ve tu pasaje.',
      ruta: '/Venta-Pasajes',
      imagen: 'assets/img/punto4.png'
    }
  ];
}
