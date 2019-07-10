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
    console.log(propName);
    let change = changes[propName];
    console.log(change);
    let nuevaFigura = change.currentValue;
    if(!nuevaFigura){
      return;
    }
    console.log(nuevaFigura);
    let posiciones = nuevaFigura.posicions;
    for(let pos of posiciones){
      this.indices[pos.index] = 1;  
    }

   
  }

}