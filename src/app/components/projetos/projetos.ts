import { Component } from '@angular/core';

interface Projeto {
  titulo: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  projetos: Projeto[] = [
  {
    titulo: 'ISO Builder Web',
    periodo: '2025 – Presente',
    descricao: 'Aplicação que permite criar uma imagem ISO personalizada do Linux (Ubuntu/Arch) para backup ou acesso remoto. Interface gráfica em Python + PyQt5, backend em Bash Script, sem dependências externas. Também é meu projeto de TCC.',
    tecnologias: ['Python', 'PyQt5', 'Bash'],
    githubUrl: 'https://github.com/joaovitor10br/SiteDesmontagemISO',
    demoUrl: 'https://joaovitorportfolio.infinityfreeapp.com'
  },
  {
    titulo: 'Estudos de Linguagem C',
    periodo: '2026',
    descricao: 'Repositório com exemplos práticos e anotações do meu curso de linguagem C, cobrindo ponteiros, manipulação de memória e macros de pré-processador.',
    tecnologias: ['C'],
    githubUrl: 'https://github.com/joaovitor10br/Aulas_C'
  }
];

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }
}