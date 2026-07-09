import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sobre, Habilidades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-dev');
}
