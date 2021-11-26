import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  private DRUGS_API_ENDPOINT = "http://localhost:7200/drugs"
  constructor(private httpClient: HttpClient) { }

  public getDrugs (): any {
    return this.httpClient.get(this.DRUGS_API_ENDPOINT);
  }
}
