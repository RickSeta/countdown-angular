import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gerencia-countdown',
  templateUrl: './gerencia-countdown.component.html',
  styleUrls: ['./gerencia-countdown.component.scss']
})
export class GerenciaCountdownComponent implements OnInit {

  newCountdownName:string;
  configArray: Array<any>;

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    this.retrieveCountdowns()
  }

  public newCountdown(){
    let novaConfig = {
      leftTime: 1621671112,
      nome: this.newCountdownName
    }
    console.log("Ta salvo");
    this.configArray.push(novaConfig);
    localStorage.setItem("arrayCountdowns",JSON.stringify(this.configArray));
    this.newCountdownName = "";
  }

  public wipeArray(){
    localStorage.removeItem("arrayCountdowns");
    this.retrieveCountdowns();
  }

  public removeOneCountdown(index: number){
    this.configArray.splice(index,1);
    localStorage.setItem("arrayCountdowns",JSON.stringify(this.configArray));
  }

  public retrieveCountdowns(){
    console.log('pego');
    this.configArray = JSON.parse(localStorage.getItem("arrayCountdowns")) || [];
  }

  public redirect(rota: string){
    this.router.navigate([rota]);
  }
}
