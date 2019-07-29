import { Component, OnInit } from '@angular/core';
import { Pastilla } from '../models/pastilla.model';

@Component({
  selector: 'app-lista-pastillas',
  templateUrl: './lista-pastillas.component.html',
  styleUrls: ['./lista-pastillas.component.css']
})
export class ListaPastillasComponent implements OnInit {
  pastillas: Pastilla[];

  constructor() {
    this.pastillas = [];
  }

  ngOnInit() {
  }

  add(nombre: string, desc: string): boolean {
    this.pastillas.push(new Pastilla(nombre, desc));
    return false;
  }

}
