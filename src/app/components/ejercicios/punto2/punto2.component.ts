import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
  descuento: number;
  estado: 'disponible' | 'vendido' | 'reparacion';
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component {
  productos: Producto[] = [
    {
      nombre: 'Notebook Asus 13L',
      descripcion: 'Disco 40GB, 15 pulgadas',
      img: 'notebook13l.jpg',
      precio: 650.00,
      descuento: 10,
      estado: 'disponible'
    },
    {
      nombre: 'Monitor LG 14"',
      descripcion: 'Monitor LED Full HD',
      img: 'producto02.jpg',
      precio: 230.00,
      descuento: 15,
      estado: 'disponible'
    },
    {
      nombre: 'Teclado Mecánico',
      descripcion: 'RGB, switches Cherry MX',
      img: 'producto03.jpg',
      precio: 35.00,
      descuento: 100,
      estado: 'disponible'
    }
  ];

  carrito: Producto[] = [];

  productoYaEnCarrito(prod: Producto): boolean {
    return this.carrito.some(x => x.nombre === prod.nombre);
  }

  toggleProducto(p: Producto) {
    if (this.productoYaEnCarrito(p)) {
      this.carrito = this.carrito.filter(item => item.nombre !== p.nombre);
    } else {
      this.carrito.push(p);
    }
  }

  getTotal(): number {
    return this.carrito.reduce((sum, p) => sum + p.precio, 0);
  }

  getTotalConDescuento(): number {
    return this.carrito.reduce((sum, p) => {
      const descuento = (p.precio * p.descuento) / 100;
      return sum + (p.precio - descuento);
    }, 0);
  }

  finalizarPago() {
    const carritoModalEl = document.getElementById('carritoModal');
    const modalCarrito = bootstrap.Modal.getInstance(carritoModalEl);
    const vacioModalEl = document.getElementById('carritoVacioModal');
    const pagoModalEl = document.getElementById('pagoExitosoModal');

    if (this.carrito.length === 0) {
      if (modalCarrito) modalCarrito.hide();
      const vacioModal = new bootstrap.Modal(vacioModalEl);
      vacioModal.show();
      setTimeout(() => vacioModal.hide(), 2000);
      return;
    }

    if (modalCarrito) modalCarrito.hide();
    const pagoModal = new bootstrap.Modal(pagoModalEl);
    pagoModal.show();
    this.carrito = [];
    setTimeout(() => pagoModal.hide(), 2000);
  }
}
