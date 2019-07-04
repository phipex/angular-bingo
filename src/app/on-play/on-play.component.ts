import { Component, EventEmitter , OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';
import { Premio, IPremio } from '../Modelos/premio.model';
import { IFigura, Figura, IPosicion, Posicion } from '../Modelos/figura.model';
import { BalotaBingo, IBalotaBingo}  from '../Modelos/balota.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SorteoBingoService } from '../Servicios/sorteo-bingo.service';
import { BalotasServiceService } from '../Servicios/balotas-service.service';
import { PremioServiceService } from '../Servicios/premio-service.service';
@Component({
  selector: 'app-on-play',
  templateUrl: './on-play.component.html',
  styleUrls: ['./prueba.scss']
})
export class OnPlayComponent implements OnInit {
  idSorteo;
   
  balotas: IBalotaBingo[];
  premios: IPremio[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sorteoService: SorteoBingoService,
    private balotasService: BalotasServiceService,
    private premioService: PremioServiceService
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
       this.idSorteo = params.get('idSorteo');
     });
    this.onSorteoInit();
  }

  onSorteoInit(){
    let sorteo = this.idSorteo;
    this.premios = this.premioService.getPremiosBySorteoId(sorteo);
    this.balotas = this.balotasService.getBalotasBySorteoId(sorteo);

    //console.log("balotas",this.balotas);
    const len = this.balotas.length;
    const intervalCount = interval(5000);
    const takeFive = intervalCount.pipe(take(len));
    takeFive.subscribe(index => this.onNewBalota(index));
  }

  onNewBalota(index){
    let balota = this.balotas[index];
    //console.log(balota);
    this.balotasService.anunceNewBalota(balota);
  }
}