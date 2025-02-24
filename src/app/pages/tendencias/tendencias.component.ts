import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ IMPORTANTE

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ SE AGREGA RouterModule
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.scss']
})
export class TendenciasComponent {}
