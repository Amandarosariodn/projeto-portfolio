import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-contato',
  imports: [RouterLink, Header],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {}
