import { Pipe, PipeTransform } from '@angular/core';
import {Medication} from "../../Constants";

@Pipe({
  name: 'mapMedication'
})
export class MapMedicationPipe implements PipeTransform {

  transform(value: 'I'): string[] {
      return (<any>Medication)[value] ;
  }

}
