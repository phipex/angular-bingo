import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SorteoBingoService } from './Servicios/sorteo-bingo.service';
import { Sorteo, ISorteo, EstadoSorteo } from './Modelos/sorteo.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  //private route: ActivatedRoute;
  name = 'Angular';
  idSala;
  idSorteo;
  nombreOperador;
  sorteo: ISorteo;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sorteoService: SorteoBingoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idSala = params.get('idSala') || 1;
      this.idSorteo = params.get('idSorteo') || 1;
      this.nombreOperador = params.get('nombreOperador') || 1;

      console.log(this.idSala);
      console.log(this.idSorteo);
      console.log(this.nombreOperador);

      if(!this.idSala){
        console.log("no llego nada");
        //return;
      }

      this.sorteo =this.sorteoService.getSorteoById(this.idSorteo);
      console.log("this.sorteo",this.sorteo);

      this.sorteoService.saveTemp(this.sorteo);

      let estado = this.sorteo.estadoSorteo;
      console.log(estado, (EstadoSorteo.PENDING == estado), EstadoSorteo.PENDING);

      if(EstadoSorteo.PENDING == estado){
        this.router.navigate(['/onpending'], { skipLocationChange: true });
        return;
      }
      
      if(EstadoSorteo.STARTED == estado){
        this.router.navigate(['/onplay', this.idSorteo], { skipLocationChange: true });
        return;
      }
      if(EstadoSorteo.CANCELED == estado){
        this.router.navigate(['/oncanceled'], { skipLocationChange: true });
        return;
      }
      if(EstadoSorteo.FINISHED == estado){
        this.router.navigate(['/onfinished'], { skipLocationChange: true });
        return;
      }/**/
    });
  }

}
