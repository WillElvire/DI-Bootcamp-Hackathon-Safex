import { Component, ViewChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements  OnInit  {
  @ViewChild("piechar",{static : false}) piechar ?: HTMLCanvasElement ;
  @Input() data !: number[];
  @Input() labels!: string[];
  @Input() label !:string;


  constructor(){
    console.log("ok");
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
}
