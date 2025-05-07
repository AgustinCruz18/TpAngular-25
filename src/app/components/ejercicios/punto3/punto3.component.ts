import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component {
  categoria = 'Animales';
  palabras: string[] = ['elefante', 'jirafa', 'pinguino', 'tigre', 'leon', 'cocodrilo', 'zorro', 'ballena', 'serpiente', 'rinoceronte','toro','dinosaurio'];
  palabraOculta: string = '';
  letrasAdivinadas: string[] = [];
  intentosRestantes: number = 6;
  imagenActual: string = '';
  letrasDisponibles: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  juegoTerminado: boolean = false;
  juegoIniciado: boolean = false;

  iniciarJuego() {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.palabraOculta = this.palabras[randomIndex].toUpperCase();
    this.letrasAdivinadas = [];
    this.intentosRestantes = 6;
    this.actualizarImagen();
    this.juegoTerminado = false;
    this.juegoIniciado = true;
  }

  letraSeleccionada(letra: string) {
    if (this.juegoTerminado || this.letrasAdivinadas.includes(letra)) return;

    this.letrasAdivinadas.push(letra);

    if (!this.palabraOculta.includes(letra)) {
      this.intentosRestantes--;
      this.actualizarImagen();
    }

    if (this.intentosRestantes === 0) {
      this.juegoTerminado = true;
      const modal = new bootstrap.Modal(document.getElementById('perdioModal'));
      modal.show();
    }

    if (this.palabraOculta.split('').every(l => this.letrasAdivinadas.includes(l))) {
      this.juegoTerminado = true;
      const modal = new bootstrap.Modal(document.getElementById('ganoModal'));
      modal.show();
    }
  }

  obtenerPalabraMostrada(): string {
    return this.palabraOculta
      .split('')
      .map(l => (this.letrasAdivinadas.includes(l) ? l : '_'))
      .join(' ');
  }

  actualizarImagen() {
    this.imagenActual = `assets/img/ahorcado${7 - this.intentosRestantes}.jpg`;
  }

  reiniciarJuego() {
    this.iniciarJuego();
  }
}
