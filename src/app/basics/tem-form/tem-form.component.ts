import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
import { FormServiceService } from 'src/app/Services/form-service.service';

@Component({
  selector: 'app-tem-form',
  templateUrl: './tem-form.component.html',
  styleUrls: ['./tem-form.component.css'],
  providers:[UserDetails]
})
export class TemFormComponent implements OnInit {

  constructor(private fs:FormServiceService) {
    this.details= new UserDetails();
   }
  details:UserDetails;
  ngOnInit() {
  }
  formSubmit(k:UserDetails){
    console.log(k);
    alert( JSON.stringify(this.details, null, 4));
    this.fs.formdata(this.details)
 
  }

}
