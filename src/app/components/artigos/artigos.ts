import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Artigo {
  titulo: string;
  resumo: string;
  data: Date;
}

@Component({
  selector: 'app-artigos',
  imports: [DatePipe],
  templateUrl: './artigos.html',
  styleUrl: './artigos.css'
})
export class Artigos {
  artigos: Artigo[] = [
    {
      titulo: 'Como criei minha primeira imagem ISO personalizada no Linux',
      resumo: 'Um resumo do processo de desenvolvimento do ISO Builder Web, os desafios de trabalhar sem dependências externas e as decisões técnicas por trás do projeto.',
      data: new Date(2026, 6, 13)
    },
    {
      titulo: 'Ponteiros em C: entendendo memória de verdade',
      resumo: 'Anotações e aprendizados do meu estudo de ponteiros em C, incluindo os erros mais comuns que cometi no caminho.',
      data: new Date(2026, 6, 13)
    },
    {
      titulo: 'Minha jornada aprendendo Angular do zero',
      resumo: 'Como decidi aprender Angular criando meu próprio site de portfólio, e o que aprendi sobre componentes, signals e data binding no processo.',
      data: new Date(2026, 6, 13)
    }
  ];
}
