import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PoliticaPrivacidade } from './pages/politica-privacidade/politica-privacidade';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'politica-privacidade', component: PoliticaPrivacidade }
];