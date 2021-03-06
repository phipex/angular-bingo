import { Injectable } from '@angular/core';
import moment from 'moment';
import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';
@Injectable()
export class SorteoBingoService {

  public static sorteo: ISorteo; //FIXME esto da guacharas

  constructor() { }

  public saveTemp(sorteo: ISorteo){

    SorteoBingoService.sorteo = sorteo;
  }

  public getSavedTemp(): ISorteo {
    return SorteoBingoService.sorteo;
  }

  public getSorteoById(sorteoId): ISorteo {
    console.log("moment",moment);
    let sorteo = new Sorteo();
    sorteo.id = 1;
    sorteo.horaCreacion = moment("2019-01-01T01:01:01.000-5000");
    sorteo.horaEjecucion = moment("2019-01-01T01:01:01.000-5000");
    sorteo.horaProgramacion = moment("2019-01-01T01:01:01.000-5000");
    sorteo.cierreVenta = moment("2019-01-01T01:01:01.000-5000");
    sorteo.estadoSorteo = EstadoSorteo.PENDING;
    sorteo.valorTabla = 10000;
    sorteo.horaApertura = moment("2019-01-01T01:01:01.000-5000");
    sorteo.recaudoMinimo = sorteo.valorTabla * 1000;
    return sorteo;
  }

}