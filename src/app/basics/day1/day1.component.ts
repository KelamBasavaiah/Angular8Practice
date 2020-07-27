import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
initial:string;
  numberArray=[11,2,3,4,56,7,7,4]
  constructor() { }

  ngOnInit() {
  }
  click1(ip:string){
    console.log(ip);
  }
 addItem(k:number){
   console.log(k);
   this.numberArray.push(k);
 }

}
