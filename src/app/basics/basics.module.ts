import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day1Component } from './day1/day1.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemFormComponent } from './tem-form/tem-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormDataComponent } from './form-data/form-data.component';
import { EditFormDataComponent } from './edit-form-data/edit-form-data.component';
import { tableRdata } from './tabledRdata/tableRdata.componemt';





@NgModule({
  declarations: [Day1Component, ParentChildComponent, TemFormComponent, ReactiveFormComponent,
     FormDataComponent, EditFormDataComponent,tableRdata],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    
  ],
  exports:[Day1Component,TemFormComponent,ReactiveFormComponent,FormDataComponent,tableRdata]
})
export class BasicsModule { }
