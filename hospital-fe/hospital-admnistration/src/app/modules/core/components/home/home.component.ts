import { Component, OnInit } from '@angular/core';
import {Quarantine} from "hospital-lib";
import {FacadeService} from "../../../../services/facade-service.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quarantine: Observable<Quarantine> = of();
  drugs: any = [];
  medicalConditions: Observable<any[]> = of([]);
  history: any = [];
  isDrugsAdministratedButtonDisabled: boolean = true;

  handlePatientsClick() {
      this.isDrugsAdministratedButtonDisabled = false;

  }

  handleAdministrateDrugsToPatients() {
    this.facadeService.getPatients().subscribe()
  }

  constructor(private facadeService: FacadeService) { }


  ngOnInit(): void {
  }

}
