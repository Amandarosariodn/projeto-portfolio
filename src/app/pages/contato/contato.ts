import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-contato',
  imports: [RouterLink, Header, Footer],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {}
