import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {

//Esse aqui era o inicial mas ele não fazia a contagem de dias, apenas de horas
//deixei aqui caso haja algo de util
  nomeNovoCountdown:string;
  
  dataAtual = Math.floor(Date.now() / 1000);
  config1={
    leftTime: this.dataAtual ,
    format: 'hh:mm:ss.S'
  }
  config2={
    leftTime: 1001990000,
    format: 'dd/MM/yyyy'
  }
  configArray: Array<any>;
  nomeArray: Array<string>;

  constructor() { }
  
  ngOnInit(): void {
    this.pegaCountdowns()
  }

  public novoCountdown(){
    console.log(this.nomeNovoCountdown);
    let novaConfig = {
      leftTime: 1621671112,
      format: 'dd/MM/yyyy h:mm:ss.S'
    }
    console.log("Ta salvo");
    this.configArray.push(novaConfig);
    localStorage.setItem("arrayCountdowns",JSON.stringify(this.configArray));

    this.nomeArray.push(this.nomeNovoCountdown+" ");
    localStorage.setItem("arrayNomes", JSON.stringify(this.nomeArray));
  }

  public limpaArray(){
    localStorage.removeItem("arrayCountdowns");
    localStorage.removeItem("arrayNomes");
    this.pegaCountdowns();
  }

  public pegaCountdowns(){
    console.log('pego');
    this.configArray = JSON.parse(localStorage.getItem("arrayCountdowns")) || [this.config1,this.config2];
    this.nomeArray = JSON.parse(localStorage.getItem("arrayNomes")) || ["Nome 1 ", "Nome 2 "];
  }
}
