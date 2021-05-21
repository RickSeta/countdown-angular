import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.scss']
})
export class Display1Component implements OnInit {

  configArray: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.retrieveCountdowns();
  }

  public retrieveCountdowns(){
    console.log('pego');
    this.configArray = JSON.parse(localStorage.getItem("arrayCountdowns")) || [];
  }

}
