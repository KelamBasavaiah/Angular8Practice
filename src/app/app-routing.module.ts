import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemFormComponent } from './basics/tem-form/tem-form.component';
import { AppComponent } from './app.component';
import { Day1Component } from './basics/day1/day1.component';
import { ParentChildComponent } from './basics/parent-child/parent-child.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ReactiveFormComponent } from './basics/reactive-form/reactive-form.component';
import { FormDataComponent } from './basics/form-data/form-data.component';
import { EditFormDataComponent } from './basics/edit-form-data/edit-form-data.component';
import { tableRdata } from './basics/tabledRdata/tableRdata.componemt';


const routes: Routes = [{path:'tempForm',component:TemFormComponent},
                        {path:'basics',component:Day1Component},
                        {path:'parentChild',component:ParentChildComponent},
                        {path:'reacForm',component:ReactiveFormComponent},
                        {path:'viewFormData',component:FormDataComponent},
                     {path:'editFormData/:Name',component:EditFormDataComponent},
                     {path:'tableRdata',component:tableRdata},
                        { path: '',   redirectTo: '/basics', pathMatch: 'full' },
                        {path:'**',component:ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
