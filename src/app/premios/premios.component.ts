import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Premio, IPremio } from '../Modelos/premio.model';
import { IFigura, Figura, IPosicion, Posicion } from '../Modelos/figura.model';
@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {
  @Input() listaPremios: IPremio[];
  public figuraActual: IFigura;
  public valorActual;  

  constructor() { }

  ngOnInit() {
     //console.log("balotas",this.balotas);
    const len = this.listaPremios.length;
    const intervalCount = interval(2000);
    let indexPremios = 0;
    let indexFiguras = 0;
    intervalCount.subscribe((index) => {
      
      if(indexPremios >= len){
        indexPremios = 0;
      }

      let premio = this.listaPremios[indexPremios];
      let figuras = premio.figuras;
      let lenFiguras = figuras.length;

      if(indexFiguras >= lenFiguras){
        indexPremios++;
        indexFiguras = 0;
 
        return;
      }
      let figura = figuras[indexFiguras];
      
      this.mostrarPremioFigura(premio.valor, figura);
      indexFiguras++;
    });

  }

  mostrarPremioFigura(valorPremio, figura){
    
    this.figuraActual = figura;
    this.valorActual = valorPremio;
  }

}