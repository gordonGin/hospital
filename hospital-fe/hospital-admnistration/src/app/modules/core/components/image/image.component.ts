import {Component, Input, OnInit} from '@angular/core';

const imageMapper = {
  F: 'fever',
  D: 'diabetes',
  H: 'healthy',
  T: 'tuberculosis',
  X: 'dead',
}
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() medicalCondition: string = '';
  constructor() { }
  getImage(medicalCondition: string): any {
    return `../../assets/images/diabetes.jpg`
  }
  ngOnInit(): void {
  }

}
