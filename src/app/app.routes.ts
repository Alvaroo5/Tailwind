import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'registro', component: RegistroComponent },
  { path: 'tendencias', component: TendenciasComponent },
  { path: '**', redirectTo: '' }
];
