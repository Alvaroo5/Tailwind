import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ IMPORTANTE

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ SE AGREGA RouterModule
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {}
