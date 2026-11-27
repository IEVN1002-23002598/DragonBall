import { Component, OnInit } from '@angular/core';
import { IHeroes } from '../heroes';
import { Dragonball } from '../../services/dragonball';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css'
})
export class HeroesList implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';
  heroes: IHeroes[] = [];

  constructor(private dbService: Dragonball) {}

  ngOnInit(): void {
    this.dbService.getCharacters().subscribe({
      next: (response) => {
        this.heroes = response.items;
      },
      error: (err) => console.error('Error al cargar la API:', err)
    });
  }

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }
}