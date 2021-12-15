import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import mapDrugsToEntity from "../../interfaces/mappers/DrugsMapper";
import {Observable} from "rxjs";
import {ENDPOINTS} from "../Constants";

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(private httpClient: HttpClient) { }

  public getDrugs ():Observable<string[]> {
    return this.httpClient.get<string>(ENDPOINTS.DRUGS_API_ENDPOINT).pipe(
        map((drugs) => mapDrugsToEntity(drugs)));
  }
}
