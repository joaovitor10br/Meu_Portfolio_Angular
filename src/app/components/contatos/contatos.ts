declare function gtag_report_conversion(url?: string, email?: string): boolean;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contatos',
  imports: [ReactiveFormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css'
})
export class Contatos {
  form: FormGroup;
  enviado = false;
  erroEnvio = false;

  readonly emailDestino = 'joaovitoralvesmartins10@gmail.com';
  readonly whatsappNumero = '27992756770';
  readonly linkedinUrl = 'https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-martins-573574217/';
  readonly githubUrl = 'https://github.com/joaovitor10br';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nome() { return this.form.get('nome'); }
  get email() { return this.form.get('email'); }
  get mensagem() { return this.form.get('mensagem'); }

  enviar(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const { nome, email, mensagem } = this.form.value;

  emailjs.send(
    'service_od8oro1',
    'template_90e7zp6',
    { nome, email, mensagem },
    { publicKey: 'UMEkS-4yk6cWF6lat' }
  ).then(
    () => {
      gtag_report_conversion();
      this.enviado = true;
      this.erroEnvio = false;
      this.form.reset();
    },
    (erro) => {
      console.error('Erro ao enviar:', erro);
      this.erroEnvio = true;
    }
  );
}
}