import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
@Input() nm :any[];
@Output() newEvent= new EventEmitter<any>();
addtop(k:number){
  
  this.newEvent.emit(k);
}

  ngOnInit() {
  }

}
