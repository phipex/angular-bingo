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

  }

}
