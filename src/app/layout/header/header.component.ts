import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NavbarComponent] // Agregamos el Navbar aquí
})
export class HeaderComponent {
  isDarkMode = false;
  isMenuOpen = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
