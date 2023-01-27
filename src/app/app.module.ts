import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './angular-forms/dynamic-form/dynamic-form.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { DynamicFormQuestionComponent } from './angular-forms/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    AngularFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
