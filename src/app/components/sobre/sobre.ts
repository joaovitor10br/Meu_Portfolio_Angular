import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  nome = 'João Vitor';
  fotoUrl = 'foto-perfil.jpeg';
  curriculoUrl = 'meu_curriculo_joao_vitor.pdf';
  descricao = 'Desenvolvedor com foco em back-end e front-end, atuando com Python, Java, JavaScript, TypeScript, C e C#. Formação em Engenharia da Computação e projetos práticos como sistemas de backup em Linux. Busco sempre entregar soluções sob medida, com atenção a detalhes e prazos.';
}