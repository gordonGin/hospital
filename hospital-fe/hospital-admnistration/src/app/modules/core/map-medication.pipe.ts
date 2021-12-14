import { Pipe, PipeTransform } from '@angular/core';

enum Medication {
    An = 'Antibiotic',
    As = 'Aspirin',
    I = 'Insulin',
    P = 'Paracetamol',
    
}


@Pipe({
  name: 'mapMedication'
})
export class MapMedicationPipe implements PipeTransform {

  transform(value: 'I'): string[] {
      return (<any>Medication)[value] ;
  }

}
