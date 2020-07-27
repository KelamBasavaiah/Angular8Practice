import { Injectable } from '@angular/core';
import { reactiveDetails } from '../models/reactiveDetails';
import { FormServiceService } from './form-service.service';

@Injectable({
    providedIn: 'root'
})

export class staticRFD {
    rform: reactiveDetails[] = [];
    public addData=false;
    constructor(private fs: FormServiceService) {
       
    }
    addMoreData() {
        let r; r = new reactiveDetails();
        r = { Name: "basivii", DOB: "1920-07-01", Qualification: "B.E", Gender: "Male", Mail: "basavaiah@gmail.com", Grade: 8, Id: "GH567", Terms: true }
        this.fs.rform.push(r);
        r = { Name: "bhagav", DOB: "1996-07-01", Qualification: "B.E", Gender: "Male", Mail: "bhargav@gmail.com", Grade: 8, Id: "GH787", Terms: true }
        this.fs.rform.push(r);
        r = { Name: "ram", DOB: "2000-07-01", Qualification: "B.E", Gender: "Male", Mail: "ram@gmail.com", Grade: 9, Id: "GH967", Terms: true }
        this.fs.rform.push(r);
        r = { Name: "bheem", DOB: "1920-07-01", Qualification: "B.E", Gender: "Male", Mail: "bheem@gmail.com", Grade: 5, Id: "GH457", Terms: true }
        this.fs.rform.push(r);
        r = { Name: "somu", DOB: "1989-07-01", Qualification: "B.E", Gender: "Male", Mail: "somu@gmail.com", Grade: 8, Id: "GH367", Terms: true }
        this.fs.rform.push(r);
        r = { Name: "geemu", DOB: "1945-07-01", Qualification: "B.E", Gender: "Male", Mail: "geemu@gmail.com", Grade: 8, Id: "GH967", Terms: true }
        this.fs.rform.push(r);
        this.addData=true;
    }
}