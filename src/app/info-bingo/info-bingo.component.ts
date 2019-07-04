import { Component, Input, OnInit } from '@angular/core';
import { BalotasServiceService } from '../Servicios/balotas-service.service';
import { BalotaBingo, IBalotaBingo}  from '../Modelos/balota.model';

@Component({
  selector: 'app-info-bingo',
  templateUrl: './info-bingo.component.html',
  styleUrls: ['./info-bingo.component.css']
})
export class InfoBingoComponent implements OnInit {

  @Input() idSorteo;
  private listaBalotas: Integer[] = [];
  ultima: Integer = 0;
  ultima1: Integer = 0;
  ultima2: Integer = 0;
  ultima3: Integer = 0;
  ultima4: Integer = 0;
  len: Integer = 0;

  constructor(balotaService: BalotasServiceService) { 

    balotaService.balotaAnnounced$.subscribe(
      (balota) => this.onNewBalota(balota)
    );

  }

  ngOnInit() {
  }

  onNewBalota(balota: IBalotaBingo){
    let listaBalotas = this.listaBalotas;
    let numero = balota.numero
    listaBalotas.push( numero);
    this.len = listaBalotas.length;
    
    this.ultima4 = this.ultima3;
    this.ultima3 = this.ultima2;
    this.ultima2 = this.ultima1;
    this.ultima1 = this.ultima;
    this.ultima = numero;

  }

}