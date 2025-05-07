import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  noticias = [
    { titulo: 'Sánchez: "La ley del sí es sí tuvo efectos indeseados... y me quedo corto"', noticia: 'El presidente aborda la polémica ley.', img: 'noticia01.jpg' },
    { titulo: '«Que los niños cambien su cuerpo sin restricción es muy peligroso»', noticia: 'Preocupación por la transición de género en menores.', img: 'noticia02.jpg' },
    { titulo: 'Amazon se va de Martorelles tras pedir privilegios al ayuntamiento', noticia: 'La multinacional abandona el proyecto.', img: 'noticia03.jpg' }
  ];

  actual = 0;
 
  siguiente() {
    this.actual = (this.actual + 1) % this.noticias.length;
  }

  anterior() {
    this.actual = (this.actual - 1 + this.noticias.length) % this.noticias.length;
  }

}
