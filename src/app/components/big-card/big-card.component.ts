import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
  photoCover: string = "cidade-submersa-na-grecia"
  cardTitle: string = "Pesquisadores Anunciam Avanço Promissor na Luta Contra o Câncer de Pulmão"
  cardDescription:string ="odijeiienvnsbusnubu"

  constructor() { }

  ngOnInit(): void {
  }

}
