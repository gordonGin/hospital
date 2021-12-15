import { Pipe, PipeTransform } from '@angular/core';
import { MedicalConditions } from "../../Constants";

@Pipe({
  name: 'mapMedicalCondition'
})
export class MapMedicalConditionPipe implements PipeTransform {

  transform(value = 'F'): MedicalConditions {
    return (<any>MedicalConditions)[value];
  }

}
