import { Component, OnInit } from "@angular/core";
import { UserDetails } from 'src/app/models/user-details';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { reactiveDetails } from 'src/app/models/reactiveDetails';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tableRdata',
    templateUrl: './tableRdata.component.html',
    styleUrls:['./tableRdata.component.css']
})
export class tableRdata implements OnInit {
    rForm: reactiveDetails[] = [];
    constructor(private fs: FormServiceService,private route:Router) {
        this.rForm = fs.getRData();

    }
    deleteRF(obj) {
        if (window.confirm('Are sure you want to delete this item ?' )) {
          this.rForm = this.fs.deleteRData(obj);
        }
      }
      editRF(obj) {
        if (window.confirm('Are sure you want to Edit this item ?')) {
          this.route.navigate(['editFormData', obj.Name]);
        }
      }
    ngOnInit() { }
}