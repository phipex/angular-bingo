import { Component, OnInit } from '@angular/core';
import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';
import { SorteoBingoService } from '../Servicios/sorteo-bingo.service';
@Component({
  selector: 'app-on-pending',
  templateUrl: './on-pending.component.html',
  styleUrls: ['./on-pending.component.css']
})
export class OnPendingComponent implements OnInit {

  public sorteo: ISorteo;

  constructor(private sorteBingoService: SorteoBingoService) { }

  ngOnInit() {
    
    this.sorteo = this.sorteBingoService.getSavedTemp();
  }

}