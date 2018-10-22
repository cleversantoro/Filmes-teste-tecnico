import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmeComponent } from './filmes/filme/filme.component';
import { FilmesService } from './filmes/filmes.service';
import { HeaderComponent } from './header/header.component';
import { PlacarComponent } from './placar/placar.component';
import { FilmeService } from './filmes/filme/filme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmesComponent,
    FilmeComponent,
    HeaderComponent,
    PlacarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [FilmesService,FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
