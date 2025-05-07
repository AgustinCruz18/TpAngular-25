import { Injectable } from '@angular/core';

export interface Boleto {
  id?: number;
  dni: string;
  precio: number;
  categoriaTurista: 1 | 2 | 3;
  fechaCompra: Date;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private boletos: Boleto[] = [{
    id: 1,
    dni: '45880644',
    precio: 650,
    categoriaTurista: 2,
    fechaCompra: new Date('2025-05-01'),
    email: 'agus@gmail.com'
  }];

  private contadorId = 2;

  listar(): Boleto[] {
    return this.boletos;
  }

  crear(b: Boleto) {
    b.id = this.contadorId++;
    this.boletos.push(b);
  }

  actualizar(i: number, b: Boleto) {
    b.id = this.boletos[i].id; // mantener el id original
    this.boletos[i] = b;
  }

  eliminar(i: number) {
    this.boletos.splice(i, 1);
  }
}