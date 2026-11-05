import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { I18n } from '../../core/i18n/i18n';
import { PROFILE } from '../../data/portfolio.data';
import { environment } from '../../../environments/environment';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
  host: { class: 'panel' },
})
export class Contato {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;

  protected readonly form = { nome: '', email: '', mensagem: '' };
  protected readonly status = signal<Status>('idle');

  protected readonly cvUrl = computed(() => PROFILE.cv[this.i18n.lang()] ?? PROFILE.cv.pt);

  protected async send(): Promise<void> {
    const nome = this.form.nome.trim();
    const email = this.form.email.trim();
    const mensagem = this.form.mensagem.trim();

    if (!nome || !EMAIL_PATTERN.test(email) || !mensagem) {
      this.status.set('invalid');
      return;
    }

    this.status.set('sending');

    try {
      await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        { from_name: nome, from_email: email, message: mensagem },
        environment.emailJs.publicKey,
      );
      this.form.nome = '';
      this.form.email = '';
      this.form.mensagem = '';
      this.status.set('success');
    } catch (error) {
      console.error('Erro EmailJS:', error);
      this.status.set('error');
    }
  }
}
