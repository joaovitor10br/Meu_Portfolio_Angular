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
  descricao = 'Estudante de Engenharia da Computação, programando desde 2021. Tenho interesse tanto em back-end quanto em front-end, e nas horas vagas gosto de desenvolver jogos usando Unity e Godot.';
}