export interface IBalotaBingo {
  id?: number;
  numero?: number;
  orden?: number;
  punteros?: string;
  sorteoId?: number;
}

export class BalotaBingo implements IBalotaBingo {
  constructor(public id?: number, public numero?: number, public orden?: number, public punteros?: string, public sorteoId?: number) {}
}