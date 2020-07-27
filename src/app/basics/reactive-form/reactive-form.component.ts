import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { reactiveDetails } from 'src/app/models/reactiveDetails';
import { FormServiceService } from 'src/app/Services/form-service.service';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  rForm:reactiveDetails;
constructor(private fb:FormBuilder,private fs:FormServiceService){

}
submitted=false;
studentForm = this.fb.group({
  Name:['',[Validators.required,Validators.minLength(2)]],
  DOB:['',Validators.required],
  Qualification:['',[Validators.required]],
  Gender:['',Validators.required],
  Mail:['',[Validators.required,Validators.email]],
  Grade:['',Validators.required],
  Id:['',Validators.required],
  Terms:[false,Validators.requiredTrue]
})
get f() { return this.studentForm.controls; }
  ngOnInit() {
  }
  formSubmit(){
    this.submitted=true;
    if (this.studentForm.invalid) {
      return;
  }
  alert(JSON.stringify(this.studentForm.value, null, 4));
  this.rForm=this.studentForm.value;
  this.fs.rFormData(this.rForm);
  this.studentForm.reset()  ;
  this.studentForm.untouched;
  this.submitted=false;
  

  }

}
