import { Injectable } from '@angular/core';
import { Premio, IPremio } from '../Modelos/premio.model';
import { IFigura, Figura, IPosicion, Posicion } from '../Modelos/figura.model';
@Injectable()
export class PremioServiceService {

  constructor() { }



  public getPremiosBySorteoId(sorteoId): IPremio[]{

    let listaPremios:Array<IPremio> = [];

    for(let i=0; i < 10; i++){
      let premio: IPremio = new Premio();

      premio.valor = 20000;
      premio.porcentaje = .20;
      premio.id = (i+1);

      let listaFiguras: IFigura[] = [];
      let figura = new Figura();
      figura.id = (i+1);
      figura.nombre = "Figura"+i;

      let posicion: IPosicion = new Posicion();
      let idPosicion = Math.floor(Math.random() * 25) + 1;
      posicion.id = idPosicion;
      posicion.index = idPosicion;
      figura.posicions = [];
      figura.posicions[0] = posicion;
      listaFiguras[0] = figura;
      premio.figuras = listaFiguras;
      listaPremios[i]=premio;

    }
    return listaPremios;
  }

}