import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
// import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

//pipe
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { OderCompraComponent } from './oder-compra/oder-compra.component'
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OderCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    //FormsModule
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pr-Br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
