import {Injectable, Injector} from '@angular/core';
import {PatientsService} from "./patients.service";
import {DrugsService} from "./drugs.service";

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private _patientsService: PatientsService | undefined;

  public get patientsService(): PatientsService {
    if(!this._patientsService) {
      this._patientsService = this.injector.get(PatientsService);
    }
    return this._patientsService;
  }

  private _drugsService: DrugsService | undefined;

  public get drugsService(): DrugsService {
    if (!this._drugsService) {
      this._drugsService = this.injector.get(DrugsService);
    }
    return this._drugsService
  }

  constructor(private injector: Injector) { }

  getPatients() {
    return this.patientsService.getPatients();
  }

  getDrugs() {
    return this.drugsService.getDrugs();
  }
}
