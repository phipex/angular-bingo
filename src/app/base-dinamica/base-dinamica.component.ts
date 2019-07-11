import { Component, OnInit, ComponentFactoryResolver, ViewChild,Type } from '@angular/core';
import { SorteoBingoService } from '../Servicios/sorteo-bingo.service';
import { Sorteo, ISorteo, EstadoSorteo } from '../Modelos/sorteo.model';

import { DcDirective } from './dc.directive';
import { DinamicComponent } from './dinamic-component';
import { OnPlayComponent } from '../on-play/on-play.component';
import { OnPendingComponent } from '../on-pending/on-pending.component';
import { OnCanceledComponent } from '../on-canceled/on-canceled.component';
import { OnFinishedComponent } from '../on-finished/on-finished.component';

@Component({
  selector: 'app-base-dinamica',
  templateUrl: './base-dinamica.component.html',
  styleUrls: ['./base-dinamica.component.css']
})
export class BaseDinamicaComponent implements OnInit {

  @ViewChild(DcDirective, {static: true}) adHost: DcDirective;

  idSala;
  idSorteo;
  nombreOperador;
  sorteo: ISorteo;
  constructor(
    private sorteoService: SorteoBingoService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
      
      this.sorteo =this.sorteoService.getSorteoById(this.idSorteo);
      console.log("this.sorteo",this.sorteo);

      this.sorteoService.saveTemp(this.sorteo);

      let estado = this.sorteo.estadoSorteo;
      console.log(estado, (EstadoSorteo.PENDING == estado), EstadoSorteo.PENDING);

      if(EstadoSorteo.PENDING == estado){
        this.loadComponent(OnPendingComponent);
        
        return;
      }
      
      if(EstadoSorteo.STARTED == estado){
        this.loadComponent(OnPlayComponent);
        
        return;
      }
      if(EstadoSorteo.CANCELED == estado){
        this.loadComponent(OnCanceledComponent);
        
        return;
      }
      if(EstadoSorteo.FINISHED == estado){
        this.loadComponent(OnFinishedComponent);
        
        return;
      }/**/
    
    
    
    this.loadComponent(OnPlayComponent);

  }

  loadComponent(component: Type<any> ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}