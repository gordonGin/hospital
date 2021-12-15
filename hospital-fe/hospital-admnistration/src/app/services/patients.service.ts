import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Patients from "../../interfaces/interfaces/Patients";
import {ENDPOINTS} from "../Constants";
import {
    map,
} from "rxjs/operators";
import mapPatientsToEntity from "../../interfaces/mappers/PatientsMapper";

@Injectable({
  providedIn: 'root'
})

export class PatientsService {
  constructor(private httpClient: HttpClient) { }

  public getPatients (): Observable<Patients> {
    return this.httpClient.get<string>(ENDPOINTS.PATIENTS_ENDPOINT).pipe(
        map((patients) => mapPatientsToEntity(patients))
    );
  }
}
