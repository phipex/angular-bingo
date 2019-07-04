import { SimpleChanges, Component, OnChanges, OnInit, Input } from '@angular/core';
import { IFigura, Figura, IPosicion, Posicion } from '../Modelos/figura.model';
@Component({
  selector: 'app-figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.css']
})
export class FiguraComponent implements OnInit, OnChanges {

  @Input() public cfigura: IFigura;
  public indices: Number[] = Array.from({ length: 25 }, (a, i) => 0); 
  

  constructor() {

    
   }

  ngOnInit() {
  
  }

  ngOnChanges(changes: SimpleChanges) {
    const propName = 'cfigura';
    let change = changes[propName];
    let nuevaFigura = change.currentValue;
    let posiciones = nuevaFigura.posicions;
    for(let pos of posiciones){
      this.indices[pos.index] = 1;  
    }

   
  }

}