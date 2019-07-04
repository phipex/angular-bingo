import { Moment } from 'moment';

export const enum EstadoSorteo {
  REVIEW = 'REVIEW',
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED'
}

export interface ISorteo {
  id?: number;
  nombre?: string;
  horaCreacion?: Moment;
  horaEjecucion?: Moment;
  horaProgramacion?: Moment;
  cierreVenta?: Moment;
  estadoSorteo?: EstadoSorteo;
  valorTabla?: number;
  horaApertura?: Moment;
  recaudoMinimo?: number;
}

export class Sorteo implements ISorteo {
  constructor(
    public id?: number,
    public nombre?: string,
    public horaCreacion?: Moment,
    public horaEjecucion?: Moment,
    public horaProgramacion?: Moment,
    public cierreVenta?: Moment,
    public estadoSorteo?: EstadoSorteo,
    public valorTabla?: number,
    public horaApertura?: Moment,
    public recaudoMinimo?: number
  ) {}
}