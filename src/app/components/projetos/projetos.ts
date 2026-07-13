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
  },

  {
    titulo: 'Snake_Game_C',
    periodo: '2026',
    descricao: 'Um jogo clássico de Snake rodando no terminal, desenvolvido em C com a biblioteca ncurses.',
    tecnologias: ['C'],
    githubUrl: 'https://github.com/joaovitor10br/Snake_Game_C'
  },

  {
    titulo: 'ToDoList_React',
    periodo: '2026',
    descricao: 'Uma aplicação de lista de tarefas moderna construída com React.js, focada em praticar conceitos fundamentais do ecossistema React e boas práticas de organização de projeto.',
    tecnologias: ['HTML, CSS, JavaScript, React'],
    githubUrl: 'https://github.com/joaovitor10br/ToDoList_React'
  },

  {
    titulo: 'Primeira_Automacao',
    periodo: '2026',
    descricao: 'Automação simples feita em Python que abre o navegador, acessa o YouTube, pesquisa um canal/vídeo e inicia a reprodução automaticamente.',
    tecnologias: ['Python'],
    githubUrl: 'https://github.com/joaovitor10br/Primeira-Automacao'
  },

  {
    titulo: 'Projeto_Sistema_Banco',
    periodo: '2026',
    descricao: 'Projeto desenvolvido para praticar Programação Orientada a Objetos (POO), organização em camadas e versionamento com Git/GitHub.',
    tecnologias: ['Java'],
    githubUrl: 'https://github.com/joaovitor10br/Projeto_Sistema_Banco'
  }
];

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }
}