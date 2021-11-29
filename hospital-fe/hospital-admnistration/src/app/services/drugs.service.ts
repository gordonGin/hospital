import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import mapDrugsToEntity from "../../interfaces/mappers/DrugsMapper";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  private DRUGS_API_ENDPOINT = "http://localhost:7200/drugs";
  constructor(private httpClient: HttpClient) { }

  public getDrugs ():Observable<string[]> {
    return this.httpClient.get<string>(this.DRUGS_API_ENDPOINT).pipe(
        map((drugs) => mapDrugsToEntity(drugs)));
  }
}
