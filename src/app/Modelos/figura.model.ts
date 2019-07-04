export interface IPosicion {
  id?: number;
  index?: number;
  posX?: number;
  posY?: number;
  figuraPosicions?: IFigura[];
}

export class Posicion implements IPosicion {
  constructor(public id?: number, public index?: number, public posX?: number, public posY?: number, public figuraPosicions?: IFigura[]) {}
}

export interface IFigura {
  id?: number;
  nombre?: string;
  posicions?: IPosicion[];
  
}

export class Figura implements IFigura {
  constructor(public id?: number, public nombre?: string, public posicions?: IPosicion[]) {}
}