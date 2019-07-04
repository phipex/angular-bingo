import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { BalotasServiceService } from '../Servicios/balotas-service.service';
import { BalotaBingo, IBalotaBingo}  from '../Modelos/balota.model';

@Component({
  selector: 'app-tablero-bingo',
  templateUrl: './tablero-bingo.component.html',
  styleUrls: ['./tablero-bingo.component.scss']
})
export class TableroBingoComponent implements OnInit {

  public listaBalotas: boolean[] = [];

  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  constructor(balotaService: BalotasServiceService) { 

    this.listaBalotas = Array.from({ length: 75 }, (a, i) => false);
    //console.log(this.listaBalotas);
    balotaService.balotaAnnounced$.subscribe(
      (balota) => this.onNewBalota(balota)
    );

  }

  ngOnInit() {
  }

  onNewBalota(balota: IBalotaBingo){
    
    let listaBalotas = this.listaBalotas;
    let numero = balota.numero
    
    listaBalotas[numero - 1] = true;
    

  }

}