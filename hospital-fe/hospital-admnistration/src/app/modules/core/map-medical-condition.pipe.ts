import { Pipe, PipeTransform } from '@angular/core';

enum MedicalConditions {
  F = 'Fever',
  X = 'Dead',
  D = 'Diabetes',
  T = 'Tuberculosis',
  H = 'Healthy',
}
@Pipe({
  name: 'mapMedicalCondition'
})
export class MapMedicalConditionPipe implements PipeTransform {

  transform(value = 'F'): MedicalConditions {
    return (<any>MedicalConditions)[value];
  }

}
