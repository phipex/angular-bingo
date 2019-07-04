import { Component, Input, OnInit } from '@angular/core';
import {IGanador, Ganador} from '../Modelos/ganador.model';
import { Premio, IPremio } from '../Modelos/premio.model';
@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.css']
})
export class GanadoresComponent implements OnInit {

  @Input() listaGanadores: IGanador;
  @Input() listaPremios: IPremio;

  constructor() { }

  ngOnInit() {
  }

}