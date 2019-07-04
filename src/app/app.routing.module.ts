import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnPlayComponent } from './on-play/on-play.component';
import { OnFinishedComponent } from './on-finished/on-finished.component';
import { OnPendingComponent } from './on-pending/on-pending.component';
import { OnCloseSalesComponent } from './on-close-sales/on-close-sales.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot([
      //{ path: 'home', component: AppComponent },
      { path: 'onplay/:idSorteo', component: OnPlayComponent },
      { path: 'onfinished', component: OnFinishedComponent },
      { path: 'onpending', component: OnPendingComponent },
      { path: 'onclosesales', component: OnCloseSalesComponent },
      { path: 'oncanceled', component: OnCloseSalesComponent },
      { path: 'sorteos/:nombreOperador/Bingo/:idSala/:idSorteo', component: AppComponent }
      //,{ path: '**', redirectTo: 'onpending'}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }
