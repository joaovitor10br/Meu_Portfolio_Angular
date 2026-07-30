import { Component } from '@angular/core';
import { Sobre } from '../../components/sobre/sobre';
import { Habilidades } from '../../components/habilidades/habilidades';
import { Projetos } from '../../components/projetos/projetos';
import { Artigos } from '../../components/artigos/artigos';
import { Contatos } from '../../components/contatos/contatos';

@Component({
  selector: 'app-home',
  imports: [Sobre, Habilidades, Projetos, Artigos, Contatos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}