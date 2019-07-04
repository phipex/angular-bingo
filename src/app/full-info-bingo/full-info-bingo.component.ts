import { Component, OnInit, Input } from '@angular/core';
import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';
import { Premio, IPremio } from '../Modelos/premio.model';
import { IFigura, Figura, IPosicion, Posicion } from '../Modelos/figura.model';
import { PremioServiceService } from '../Servicios/premio-service.service'; 
import * as moment from 'moment';

@Component({
  selector: 'app-full-info-bingo',
  templateUrl: './full-info-bingo.component.html',
  styleUrls: ['./full-info-bingo.component.css']
})
export class FullInfoBingoComponent implements OnInit {

  @Input() public sorteo_src: ISorteo;

  private premios: IPremio[];

  constructor(private premioService:PremioServiceService ) {
    
  }


  ngOnInit() {
    console.info(this.sorteo_src);
    let sorteoId = this.sorteo_src.id;
    this.premios = this.premioService.getPremiosBySorteoId(sorteoId);

  }

}