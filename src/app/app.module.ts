import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './counter/heroes/heroes.module';
import { LDBModule } from './ldb/ldb.module';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    AppComponent,

    ListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    LDBModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
