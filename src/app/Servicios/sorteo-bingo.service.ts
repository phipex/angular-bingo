import { Injectable } from '@angular/core';
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
    let sorteo = new Sorteo();
    sorteo.id = 1;
    sorteo.horaCreacion = "2019-01-01T01:01:01.000-500";
    sorteo.horaEjecucion = "2019-01-01T01:01:01.000-500";
    sorteo.horaProgramacion = "2019-01-01T01:01:01.000-500";
    sorteo.cierreVenta = "2019-01-01T01:01:01.000-500";
    sorteo.estadoSorteo = EstadoSorteo.FINISHED;
    sorteo.valorTabla = 10000;
    sorteo.horaApertura = "2019-01-01T01:01:01.000-500";
    sorteo.recaudoMinimo = sorteo.valorTabla * 1000;
    return sorteo;
  }

}