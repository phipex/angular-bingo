import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BalotaBingo, IBalotaBingo}  from '../Modelos/balota.model';

@Injectable()
export class BalotasServiceService {

  private balotaAnnouncedSource = new Subject<IBalotaBingo>();

  public balotaAnnounced$ = this.balotaAnnouncedSource.asObservable();

  constructor() { }

  public anunceNewBalota(balota: IBalotaBingo){
    this.balotaAnnouncedSource.next(balota);
  }

  public getBalotasBySorteoId(sorteoId): IBalotaBingo[] {

    let listaBalotas: IBalotaBingo[] = [];
    let num = 0;
    let numeros = Array.from({ length: 75 }, (a, i) => ++num);
    numeros = numeros.sort(function() {return Math.random() - 0.5});
    
    for(let i=0; i< 75; i++){
      let balota:BalotaBingo = new BalotaBingo();
      balota.numero = numeros[i];
      balota.orden = i;
      listaBalotas[i] = balota;
    }

    return listaBalotas;
  }

}