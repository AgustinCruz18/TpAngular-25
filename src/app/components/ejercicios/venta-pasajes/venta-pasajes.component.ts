import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Boleto, BoletoService } from '../../../services/boleto.service';

@Component({
  selector: 'app-venta-pasajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './venta-pasajes.component.html',
  styleUrls: ['./venta-pasajes.component.css']
})
export class VentaPasajesComponent {
  categorias = [
    { value: 1, label: 'Menor (−35%)' },
    { value: 2, label: 'Adulto (0%)' },
    { value: 3, label: 'Jubilado (−50%)' }
  ];

  nuevo: Partial<Boleto> = {};
  totalConDescuento: number | null = null;
  boletosVendidos: Boleto[] = [];

  mostrarFormulario = false;
  modoEdicion = false;
  indiceEditar: number | null = null;

  constructor(private svc: BoletoService) {
    this.boletosVendidos = this.svc.listar();
  }

  calcularTotal() {
    if (this.nuevo.precio != null && this.nuevo.categoriaTurista) {
      const base = this.nuevo.precio!;
      let desc = this.nuevo.categoriaTurista === 1 ? 0.35 :
                 this.nuevo.categoriaTurista === 3 ? 0.50 : 0;
      this.totalConDescuento = +(base * (1 - desc)).toFixed(2);
    } else {
      this.totalConDescuento = null;
    }
  }

  registrar() {
    if (
      this.nuevo.dni && this.totalConDescuento != null &&
      this.nuevo.categoriaTurista && this.nuevo.fechaCompra &&
      this.nuevo.email
    ) {
      const boleto: Boleto = {
        ...this.nuevo,
        precio: this.totalConDescuento
      } as Boleto;

      if (this.modoEdicion && this.indiceEditar !== null) {
        this.svc.actualizar(this.indiceEditar, boleto);
      } else {
        this.svc.crear(boleto);
      }

      this.boletosVendidos = this.svc.listar();
      this.cancelar();
    }
  }

  editar(index: number) {
    this.indiceEditar = index;
    this.nuevo = { ...this.boletosVendidos[index] };
    this.totalConDescuento = this.boletosVendidos[index].precio;
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  eliminar(index: number) {
    if (confirm('¿Estás seguro de eliminar este boleto?')) {
      this.svc.eliminar(index);
      this.boletosVendidos = this.svc.listar();
    }
  }

  cancelar() {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.indiceEditar = null;
    this.nuevo = {};
    this.totalConDescuento = null;
  }
}
