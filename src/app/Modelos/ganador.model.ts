export interface IGanador {
  id?: number;
  idOperator?: string;
  valorGanado?: number;
  premioId?: number;
}

export class Ganador implements IGanador {
  constructor(public id?: number, public idOperator?: string, public valorGanado?: number, public premioId?: number) {}
}