import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() tempoObjetivo: number;

  constructor() { }
  display: any;
  ngOnInit(): void {
    interval(1000).pipe(
      map((x)=>{
        return this.conversor(this.tempoObjetivo-(Math.floor(Date.now() / 1000)));
      })
    ).subscribe(x=>this.display = x);
  }

  conversor(t) {
    let dias, horas, minutos, segundos;
    dias = Math.floor(t / 86400);
    t -= dias * 86400;
    horas = Math.floor(t / 3600) % 24;
    t -= horas * 3600;
    minutos = Math.floor(t / 60) % 60;
    t -= minutos * 60;
    segundos = t % 60;

    return [
      dias + 'd',
      horas + 'h',
      minutos + 'm',
      segundos + 's'
    ].join(' ');
  }

}
