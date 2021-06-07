import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonService } from './services/pokemon.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    BrowserAnimationsModule,
    ChartsModule,
    ButtonsModule,
    LayoutModule,
    IndicatorsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonSearchComponent,
    PokemonsComponent,
    PokemonDetailComponent,
    PokemonCardComponent
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
