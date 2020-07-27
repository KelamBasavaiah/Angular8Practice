import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserDetails } from '../models/user-details';
import { reactiveDetails } from '../models/reactiveDetails';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private details: UserDetails[] = [];
  public rform: reactiveDetails[] = [];


  constructor() {
    let ud; ud = new UserDetails();
    ud = { name: "demo", age: 8, DOB: '1998-06-05', id: "demo123", mail: "demo@com", gender: "male", grade: 8, insurance: true };
    this.details.push(ud);
    let r; r = new reactiveDetails();
    r = { Name: "demo", DOB: "1998-07-01", Qualification: "B.E", Gender: "Male", Mail: "demo@com", Grade: 5, Id: "demo123", Terms: true }
    this.rform.push(r);
  }
  deleteTData(obj): UserDetails[] {
    this.details = this.details.filter(item => item !== obj);
    return this.details;
  }
  deleteRData(obj): reactiveDetails[] {
    this.rform = this.rform.filter(item => item !== obj);
    return this.rform;
  }
  formdata(data) {
    // console.log(data);

    this.details.push(data);
  }
  getdata(): UserDetails[] {
    return this.details;
  }
  rFormData(data) {
    this.rform.push(data);
  }
  getRData(): reactiveDetails[] {
    return this.rform;
  }
  findObject(key, value) {
    for (var i = 0; i < this.rform.length; i++) {
      if (this.rform[i][key] === value) {
        return this.rform[i];
      }
    }
    return null;
  }
  updateObject(k: reactiveDetails) {
    console.log(this.rform, k);
    for (var i = 0; i < this.rform.length; i++) {
      if (this.rform[i].Name === k.Name) {
        this.rform[i] = k;
      }
    }

  }
}
