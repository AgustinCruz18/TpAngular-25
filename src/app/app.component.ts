import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { VentaPasajesComponent } from './components/ejercicios/venta-pasajes/venta-pasajes.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1sitio-angular';
}
