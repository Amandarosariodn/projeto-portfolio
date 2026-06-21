import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { Footer } from '../../components/footer/footer';
import { environment } from '../../../environment';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [Footer, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  form = {
    nome: '',
    email: '',
    mensagem: '',
  };

  enviando = false;
  sucesso = false;
  erro = false;

  enviarEmail(): void {
    if (!this.form.nome || !this.form.email || !this.form.mensagem) {
      return;
    }

    this.enviando = true;
    this.sucesso = false;
    this.erro = false;
    emailjs
      .send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        {
          from_name: this.form.nome,
          from_email: this.form.email,
          message: this.form.mensagem,
        },
        environment.emailJs.publicKey
      )
      .then(() => {
        this.enviando = false;
        this.sucesso = true;

        this.form = {
          nome: '',
          email: '',
          mensagem: '',
        };
      })
     .catch((error) => {
  console.error('Erro EmailJS:', error);

  this.enviando = false;
  this.erro = true;
});
  }
}
