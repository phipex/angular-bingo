import { Component, OnInit, Input } from '@angular/core';
import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';
@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.css']
})
export class ApuestaComponent implements OnInit {

  @Input() public sorteo: ISorteo;

  constructor() { }

  ngOnInit() {
  }

}