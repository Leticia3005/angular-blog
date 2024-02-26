import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  photoCover:string = "cidade-submersa-na-grecia"
  cardTitle:string = "Descoberta Arqueológica Revela Antiga Cidade Submersa na Grécia"

  constructor() { }

  ngOnInit(): void {
  }

}
