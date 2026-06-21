import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-sobre',
  imports: [RouterLink, Footer],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}
