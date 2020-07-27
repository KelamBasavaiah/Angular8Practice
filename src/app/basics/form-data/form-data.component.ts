import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { UserDetails } from 'src/app/models/user-details';
import { reactiveDetails } from 'src/app/models/reactiveDetails';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { staticRFD } from 'src/app/Services/staticRFD.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  public details: UserDetails[];
  public rdetails: reactiveDetails[];
  public dummyData;

  constructor(public fs: FormServiceService, private route: Router, private sRFD: staticRFD) {
    this.details = [];
    this.details = fs.getdata();
    this.rdetails = fs.getRData();
    this.dummyData=sRFD.addData;
  }
  deleteTDF(obj) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.details = this.fs.deleteTData(obj);
    }
  }
  editTDF(obj) {
    alert("coming soon");

  }
  deleteRF(obj) {
    if (window.confirm('Are sure you want to delete this item ?' + obj.value)) {
      this.rdetails = this.fs.deleteRData(obj);
    }
  }
  editRF(obj) {
    if (window.confirm('Are sure you want to Edit this item ?')) {
      this.route.navigate(['editFormData', obj.Name]);
    }
  }
  addDummyData() {
    this.dummyData=true;
    this.sRFD.addMoreData();
  }
  gotoTable(){
    this.route.navigate(['tableRdata'])
  }
  ngOnInit() {
  }

}
