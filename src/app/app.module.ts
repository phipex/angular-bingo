import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableroBingoComponent } from './tablero-bingo/tablero-bingo.component';
import { InfoBingoComponent } from './info-bingo/info-bingo.component';
import { BaloteraBingoComponent } from './balotera-bingo/balotera-bingo.component';
import { OnPlayComponent } from './on-play/on-play.component';
import { AppRoutingModule } from './app.routing.module';
import { OnFinishedComponent } from './on-finished/on-finished.component';
import { OnPendingComponent } from './on-pending/on-pending.component';
import { OnCloseSalesComponent } from './on-close-sales/on-close-sales.component';
import { FullInfoBingoComponent } from './full-info-bingo/full-info-bingo.component';
import { FiguraComponent } from './figura/figura.component';
import { ApuestaComponent } from './apuesta/apuesta.component';
import { SorteoBingoService } from './Servicios/sorteo-bingo.service';
import { FiguraBingoService } from './Servicios/figura-bingo.service';
import { PremioServiceService } from './Servicios/premio-service.service';
import { OnCanceledComponent } from './on-canceled/on-canceled.component';
import { BalotasServiceService } from './Servicios/balotas-service.service';
import { PremiosComponent } from './premios/premios.component';
@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, TableroBingoComponent, InfoBingoComponent, BaloteraBingoComponent, OnPlayComponent, OnFinishedComponent, OnPendingComponent, OnCloseSalesComponent, FullInfoBingoComponent, FiguraComponent, ApuestaComponent, OnCanceledComponent, PremiosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SorteoBingoService, FiguraBingoService, PremioServiceService, BalotasServiceService]
})
export class AppModule { }
