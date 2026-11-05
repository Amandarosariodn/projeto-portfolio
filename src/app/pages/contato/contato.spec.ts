import { ComponentFixture, TestBed } from '@angular/core/testing';
import emailjs from '@emailjs/browser';

import { Contato } from './contato';

describe('Contato', () => {
  let fixture: ComponentFixture<Contato>;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Contato] }).compileComponents();
    fixture = TestBed.createComponent(Contato);
    root = fixture.nativeElement;
    await fixture.whenStable();
  });

  async function fill(nome: string, email: string, mensagem: string) {
    for (const [id, value] of [['nome', nome], ['email', email], ['mensagem', mensagem]]) {
      const field = root.querySelector<HTMLInputElement>(`#${id}`)!;
      field.value = value;
      field.dispatchEvent(new Event('input'));
    }
    await fixture.whenStable();
  }

  async function submit() {
    root.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
  }

  it('does not send when the email is invalid', async () => {
    const send = vi.spyOn(emailjs, 'send');
    await fill('Ana', 'ana@', 'Oi');
    await submit();
    expect(send).not.toHaveBeenCalled();
    expect(root.querySelector('.feedback')?.getAttribute('data-status')).toBe('invalid');
  });

  it('sends through EmailJS and clears the form', async () => {
    const send = vi.spyOn(emailjs, 'send').mockResolvedValue({ status: 200, text: 'OK' });
    await fill('Ana', 'ana@exemplo.com', 'Oi, Amanda!');
    await submit();
    expect(send).toHaveBeenCalledOnce();
    expect(send.mock.calls[0][2]).toEqual({
      from_name: 'Ana',
      from_email: 'ana@exemplo.com',
      message: 'Oi, Amanda!',
    });
    expect(root.querySelector('.feedback')?.getAttribute('data-status')).toBe('success');
  });

  it('shows an error when EmailJS fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(emailjs, 'send').mockRejectedValue(new Error('offline'));
    await fill('Ana', 'ana@exemplo.com', 'Oi');
    await submit();
    expect(root.querySelector('.feedback')?.getAttribute('data-status')).toBe('error');
  });
});
