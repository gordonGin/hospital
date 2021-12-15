import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ModeOptionsComponent } from './components/mode-options/mode-options.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { MapMedicalConditionPipe } from './map-medical-condition.pipe';
import { HistoryComponent } from './components/history/history.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CommonModule } from "@angular/common";
import { PatientsDisplayTable } from './components/table/patients-display-table.component';
import { MapMedicationPipe } from './map-medication.pipe';
import { PatientsFormComponent } from './components/patients-form/patients-form.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {PatientsDisplay} from "./components/patients-display/patients-display.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientsDisplay,
    ButtonComponent,
    ModeOptionsComponent,
    HomeComponent,
    MapMedicalConditionPipe,
    HistoryComponent,
    HeadingComponent,
    PatientsDisplayTable,
    MapMedicationPipe,
    PatientsFormComponent,
    ToggleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
