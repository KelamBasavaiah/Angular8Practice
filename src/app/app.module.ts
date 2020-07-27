import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsModule } from './basics/basics.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighLightsDirective } from './Directives/high-lights.directive';
import { StruCusDirDirective } from './Directives/stru-cus-dir.directive';
import { ErrorPageComponent } from './error-page/error-page.component';

//materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  declarations: [
    AppComponent,
    HighLightsDirective,
    StruCusDirDirective,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicsModule,
    FormsModule,ReactiveFormsModule,
    //materials
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
