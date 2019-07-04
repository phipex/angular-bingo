import { IFigura } from './figura.model';

export interface IPremio {
  id?: number;
  valor?: number;
  porcentaje?: number;
  promocional?: string;
  ordenBalotaGanadora?: number;
  sorteoId?: number;
  figuras?: IFigura[];
}

export class Premio implements IPremio {
  constructor(
    public id?: number,
    public valor?: number,
    public porcentaje?: number,
    public promocional?: string,
    public ordenBalotaGanadora?: number,
    public sorteoId?: number,
    public figuras?: IFigura[]
  ) {}
}