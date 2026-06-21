import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-sobre',
  imports: [RouterLink, Header],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}
