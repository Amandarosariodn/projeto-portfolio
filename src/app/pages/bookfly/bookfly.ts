import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookfly',
  imports: [Footer, RouterLink],
  templateUrl: './bookfly.html',
  styleUrl: './bookfly.css',
})
export class Bookfly {}
