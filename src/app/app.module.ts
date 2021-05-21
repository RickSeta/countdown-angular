import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometroComponent } from './components/cronometro/cronometro/cronometro.component';
import { NgxChronometerModule } from 'ngx-chronometer';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { CountdownComponent } from './components/countdown/countdown.component';
import { GerenciaCountdownComponent } from './components/gerencia-countdown/gerencia-countdown.component';
import { Display1Component } from './pages/display1/display1.component';
@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    CountdownComponent,
    GerenciaCountdownComponent,
    Display1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChronometerModule,
    CountdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
