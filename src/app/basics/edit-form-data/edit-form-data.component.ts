import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { reactiveDetails } from 'src/app/models/reactiveDetails';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form-data',
  templateUrl: './edit-form-data.component.html',
  styleUrls: ['./edit-form-data.component.css']
})
export class EditFormDataComponent implements OnInit ,OnDestroy {
  id: string;
  private sub: any;
  rf:reactiveDetails;

  constructor(private route:ActivatedRoute,private fs:FormServiceService,private fb:FormBuilder,
               private router:Router) {
    this.sub = this.route.params.subscribe(params => {this.id = params['Name'];});
      
      this.rf=this.fs.findObject("Name",this.id);    
      this.studentForm.patchValue({"Name": this.rf.Name,"DOB":this.rf.DOB,"Qualification":this.rf.Qualification
                        ,"Gender":this.rf.Gender,"Mail":this.rf.Mail,"Grade":this.rf.Grade,"Id":this.rf.Id});
  }

  submitted=false;
  studentForm = this.fb.group({
  Name:[''],
  DOB:['',Validators.required],
  Qualification:['',[Validators.required]],
  Gender:['',Validators.required],
  Mail:['',[Validators.required,Validators.email]],
  Grade:['',Validators.required],
  Id:['',Validators.required],
  Terms:[true,Validators.requiredTrue]
})
get f() { return this.studentForm.controls; }
 
formSubmit(){
  this.submitted=true;
  if (this.studentForm.invalid) {
    return;
}
alert(JSON.stringify(this.studentForm.value, null, 4));
this.rf=this.studentForm.value;
this.fs.updateObject(this.rf);
this.router.navigate(['viewFormData']);
// this.studentForm.reset()  ;
// this.studentForm.untouched;
// this.submitted=false;

}
  ngOnInit() {
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
