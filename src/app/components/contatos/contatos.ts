import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  imports: [ReactiveFormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css'
})
export class Contatos {
  form: FormGroup;
  enviado = false;

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
  const assunto = encodeURIComponent(`Contato via portfólio - ${nome}`);
  const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.emailDestino}&su=${assunto}&body=${corpo}`;
  window.open(gmailUrl, '_blank');

  this.enviado = true;
  this.form.reset();
}
}