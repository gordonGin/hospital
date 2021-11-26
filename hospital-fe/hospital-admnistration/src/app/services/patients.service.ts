import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PatientsService {
  private PATIENTS_ENDPOINT = "http://localhost:7200/patients"
  constructor(private httpClient: HttpClient) { }

  public getPatients (): any {
    return this.httpClient.get(this.PATIENTS_ENDPOINT);
  }
}
