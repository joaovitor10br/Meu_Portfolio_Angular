import { Component } from '@angular/core';

interface CategoriaHabilidade {
  titulo: string;
  itens: string[];
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css'
})
export class Habilidades {
  categorias: CategoriaHabilidade[] = [
    {
      titulo: 'Linguagens de Programação',
      itens: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C#', 'Bash']
    },
    {
      titulo: 'Sistemas Operacionais',
      itens: ['Linux (Ubuntu, Arch Linux)', 'Windows']
    },
    {
      titulo: 'Banco de Dados',
      itens: ['MySQL', 'SQL', 'Modelagem Relacional']
    },
    {
      titulo: 'Redes & Infraestrutura',
      itens: ['TCP/IP', 'CCNA', 'Cisco Packet Tracer', 'Suporte técnico']
    },
    {
      titulo: 'Ferramentas & Frameworks',
      itens: ['PyQt5', 'Git', 'GitHub', 'Cisco Packet Tracer']
    },
    {
      titulo: 'Hardware & Manutenção',
      itens: ['Montagem e manutenção de computadores', 'Diagnóstico de hardware']
    }
  ];
}