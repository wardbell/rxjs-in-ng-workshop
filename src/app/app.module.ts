import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BasicsModule } from './samples/basic/basics.module';

import { AppComponent } from './app.component';
import { ButtonBarItemComponent, ButtonBarItemDirective } from './ui/button-bar-item/button-bar-item.component';
import { ButtonBar } from './ui/button-bar/button-bar.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CompAliveObsComponent } from './samples/comp-alive-obs/comp-alive-obs.component';
import { CompAliveComponent } from './samples/comp-alive/comp-alive.component';
import { CompIsThereComponent } from './samples/comp-is-there/comp-is-there.component';
import { ErrorIsolationComponent } from './samples/error-isolation/error-isolation.component';
import { FilmPeopleComponent } from './samples/film-people/film-people.component';
import { LeakyComponent } from './samples/leaky-component/leaky.component';
import { MultiStreamComponent } from './samples/multi-stream/multi-stream.component';
import { PeopleWithHomePlanetComponent } from './samples/fork-join/people-with-home-planet.component';
import { PlayComponent } from './samples/play/play.component';
import { MovieComponent } from './samples/router/movie.component';
import { RxOperatorComponent } from './samples/rx-operator/rx-operator.component';
import { SamplesComponent } from './samples.component';
import { SimpleFilmsComponent } from './samples/simplefilms/simplefilms.component';
import { Simplefilms2Component } from './samples/simplefilms2/simplefilms2.component';
import { Simplefilms3Component } from './samples/simplefilms3/simplefilms3.component';
import { Simplefilms4Component } from './samples/simplefilms4/simplefilms4.component';
import { SwPeopleFindComponent } from './samples/sw-people-find/sw-people-find.component';
import { TakeUntilComponent } from './samples/take-until/take-until.component';
import { TakeWhileComponent } from './samples/take-while/take-while.component';
import { WhipwheehwComponent } from './samples/whipWheehw/whipwheehw.component';
import { WikipediaComponent } from './samples/wikipedia/wikipedia.component';

import { ButtonbarService } from './ui/button-bar/buttonbar.service';
import { GiphyService } from './samples/giphy.service';
import { InMemoryDataService } from './samples/in-memory-data.service';
import { SwPeopleService } from './samples/sw-people-expand.service';
import { SwPeopleComponent } from './samples/sw-people/sw-people.component';
import { SwUrlService } from './samples/sw-url.service';
import { TimeService } from './time.service';
import { WikipediaService } from './samples/wikipedia.service';

const routes: Routes = [
  { path: '', component: SamplesComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    AsyncPipeComponent,
    ButtonBar,
    ButtonBarItemComponent,
    ButtonBarItemDirective,
    CompAliveComponent,
    CompAliveObsComponent,
    CompIsThereComponent,
    ErrorIsolationComponent,
    FilmPeopleComponent,
    LeakyComponent,
    MovieComponent,
    MultiStreamComponent,
    PeopleWithHomePlanetComponent,
    PlayComponent,
    RxOperatorComponent,
    SamplesComponent,
    Simplefilms2Component,
    Simplefilms3Component,
    Simplefilms4Component,
    SimpleFilmsComponent,
    SwPeopleComponent,
    SwPeopleFindComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    WhipwheehwComponent,
    WikipediaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(routes),

    BasicsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
