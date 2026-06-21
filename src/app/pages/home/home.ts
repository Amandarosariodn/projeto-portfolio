import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TECHNOLOGY_CATEGORIES } from './data/technologies-data';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NgClass, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  technologyCategories = TECHNOLOGY_CATEGORIES;
}
